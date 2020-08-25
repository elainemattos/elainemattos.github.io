import React, { useState } from 'react'
import ReactGA from 'react-ga'
import { GlobalStyle } from './assets/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import ThemeSwitcher from './components/ThemeSwitcher'
import { lightTheme, darkTheme } from './assets/theme'
import Wrapper from './components/Wrapper'
import { StyledThemeBtn } from './components/shared'

function App() {
  ReactGA.initialize('UA-149511561-1')
  ReactGA.pageview(window.location.pathname + window.location.search)

  const [theme, setTheme] = useState(false)

  const toggleTheme = () => {
    setTheme(theme => !theme)
  }

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyledThemeBtn onClick={toggleTheme}>
        <ThemeSwitcher theme={theme} />
      </StyledThemeBtn>
      <Wrapper />
    </ThemeProvider>
  )
}

export default App
