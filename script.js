const STORAGE_KEY = 'em-theme';

const root = document.documentElement;
const themeButton = document.getElementById('theme');
const themeLabel = document.getElementById('state');

// Dark is the default. It only turns light when the visitor's system asks for it.
function systemPrefersLight() {
  return window.matchMedia('(prefers-color-scheme: light)').matches;
}

function isDark() {
  const chosen = root.getAttribute('data-theme'); // "dark", "light" or null
  if (chosen) return chosen === 'dark';
  return !systemPrefersLight();
}

// Keeps the button text and accessibility state in sync with the theme.
function updateButton() {
  const dark = isDark();
  themeLabel.textContent = dark ? 'on' : 'off';
  themeButton.setAttribute('aria-pressed', String(dark));
}

// localStorage can throw in private windows, so every access is wrapped.
function saveTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (error) {
    /* ignore: the theme just won't be remembered */
  }
}

function loadTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') {
      root.setAttribute('data-theme', saved);
    }
  } catch (error) {
    /* ignore */
  }
}

function toggleTheme() {
  const next = isDark() ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  saveTheme(next);
  updateButton();
}

loadTheme();
updateButton();
themeButton.addEventListener('click', toggleTheme);

/* --------------------------------------------------------------------------
   A 4x4 grid. Each tile is described by four things:

     background : color behind the shape ("panel" = the neutral background)
     color      : color of the shape itself
     shape      : "quarter" | "half" | "circle" | "triangle"
     turns      : starting rotation, in quarter turns (1 = 90 degrees)

   Colors match the CSS variables: yellow, red, blue, ink, panel.
   Edit this list to redesign the composition.
   -------------------------------------------------------------------------- */

const TILES = [
  // row 1
  { background: 'panel', color: 'yellow', shape: 'quarter', turns: 0 },
  { background: 'blue', color: 'yellow', shape: 'circle', turns: 0 },
  { background: 'panel', color: 'red', shape: 'quarter', turns: 1 },
  { background: 'yellow', color: 'ink', shape: 'triangle', turns: 0 },

  // row 2
  { background: 'red', color: 'panel', shape: 'half', turns: 2 },
  { background: 'panel', color: 'blue', shape: 'quarter', turns: 3 },
  { background: 'panel', color: 'blue', shape: 'quarter', turns: 2 },
  { background: 'blue', color: 'red', shape: 'half', turns: 0 },

  // row 3
  { background: 'panel', color: 'ink', shape: 'circle', turns: 0 },
  { background: 'yellow', color: 'red', shape: 'quarter', turns: 2 },
  { background: 'red', color: 'yellow', shape: 'quarter', turns: 0 },
  { background: 'panel', color: 'ink', shape: 'triangle', turns: 1 },

  // row 4
  { background: 'blue', color: 'panel', shape: 'quarter', turns: 1 },
  { background: 'panel', color: 'yellow', shape: 'half', turns: 3 },
  { background: 'yellow', color: 'blue', shape: 'circle', turns: 0 },
  { background: 'red', color: 'ink', shape: 'quarter', turns: 3 },
];

const canHover = window.matchMedia('(hover: hover)').matches;

function createTile({ background, color, shape, turns }) {
  // The button is the tile (keyboard accessible, works with touch).
  const tile = document.createElement('button');
  tile.type = 'button';
  tile.className = `mosaic__tile mosaic__tile--${shape}`;
  tile.setAttribute('aria-label', 'Rotate tile');
  if (background !== 'panel') tile.classList.add(`mosaic__tile--bg-${background}`);

  // mosaic__rotator turns; mosaic__shape is the visible shape inside it.
  const rotator = document.createElement('div');
  rotator.className = 'mosaic__rotator';

  const mark = document.createElement('div');
  mark.className = `mosaic__shape mosaic__shape--${color}`;

  rotator.appendChild(mark);
  tile.appendChild(rotator);

  // We keep counting turns instead of resetting to 0, so the tile always
  // spins forward and never animates backwards.
  let currentTurns = turns;

  function render() {
    rotator.style.transform = `rotate(${currentTurns * 90}deg)`;
  }

  function rotate() {
    currentTurns += 1;
    render();
  }

  render();
  tile.addEventListener('click', rotate);

  // On mouse devices tiles turn on hover; on touch devices only on tap.
  if (canHover) tile.addEventListener('mouseenter', rotate);

  return tile;
}

function buildMosaic() {
  const container = document.getElementById('tiles');
  TILES.forEach((tile) => container.appendChild(createTile(tile)));
}

buildMosaic();

const navLinks = document.querySelectorAll('.site-header__link');

function markCurrentLink(sectionId) {
  navLinks.forEach((link) => {
    const isCurrent = link.getAttribute('href') === `#${sectionId}`;
    link.classList.toggle('site-header__link--current', isCurrent);
    if (isCurrent) {
      link.setAttribute('aria-current', 'true');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) markCurrentLink(entry.target.id);
    });
  },
  // a section counts as "current" when it crosses the middle of the screen
  { rootMargin: '-45% 0px -50% 0px' },
);

document.querySelectorAll('.section').forEach((section) => {
  sectionObserver.observe(section);
});

// Back at the very top (hero): no link is current.
window.addEventListener(
  'scroll',
  () => {
    if (window.scrollY < 80) markCurrentLink('');
  },
  { passive: true },
);
