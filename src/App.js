import React, { useContext } from 'react'
import Routes from './Routes'
import { ThemeContext } from './theme/theme-context'

function App() {
  const lightish = `🌚`
  const darkish = `🌝`
  const { theme, toggle, light } = useContext(ThemeContext)

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
      <Routes />
    </div>
  )
}

export default App
