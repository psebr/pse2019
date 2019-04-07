import './bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import amber from '@material-ui/core/colors/amber';

import './index.css'
import App from './page/App'
import * as serviceWorker from './serviceWorker'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'light',
    secondary: amber,
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>,
  document.querySelector('#root')
)

serviceWorker.register()
