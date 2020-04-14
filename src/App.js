import React, { useContext } from 'react'
import ReactGA from 'react-ga'
import { ThemeContext } from './theme/theme-context'
import Home from './components/Home'

function App() {
  const lightish = `🌚`
  const darkish = `🌝`
  const { theme, toggle, light } = useContext(ThemeContext)

  ReactGA.initialize('UA-149511561-1')
  ReactGA.pageview(window.location.pathname + window.location.search)

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
      }}
    >
      <button
        type="button"
        onClick={toggle}
        style={{
          border: 'none',
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          fontSize: '20px',
          outline: 'none',
          padding: '5px',
        }}
      >
        {!light ? darkish : lightish}
      </button>
      <Home />
    </div>
  )
}

export default App
