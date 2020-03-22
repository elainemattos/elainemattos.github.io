import React, { useState, useEffect, createContext } from 'react'
import { themes } from './themes'

const initialState = {
  light: false,
  theme: themes.dark,
  toggle: () => {},
}
const ThemeContext = createContext(initialState)

function ThemeProvider({ children }) {
  const [light, setlight] = useState(false)

  useEffect(() => {
    const islight = localStorage.getItem('light') === 'true'
    setlight(islight)
  }, [light])

  const toggle = () => {
    const islight = !light
    localStorage.setItem('light', JSON.stringify(islight))
    setlight(islight)
  }

  const theme = light ? themes.light : themes.dark

  return (
    <ThemeContext.Provider value={{ theme, light, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
