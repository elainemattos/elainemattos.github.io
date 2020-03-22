import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from './theme/theme-context'
import * as serviceWorker from './serviceWorker'
import './assets/styles/index.scss'

ReactDOM.render(
  <ThemeProvider>
    <App className="fade" />
  </ThemeProvider>,
  document.getElementById('root')
)
serviceWorker.register()
