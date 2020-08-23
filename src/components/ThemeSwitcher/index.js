import React from 'react'

const lightish = <div>Tema Claro</div>
const darkish = <div> Tema Escuro</div>

const ThemeSwitcher = ({ theme }) => (theme === 'light' ? darkish : lightish)

export default ThemeSwitcher
