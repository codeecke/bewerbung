import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material'

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#ff0000',
    },
    background: {
      default: '#000000',
      paper: '#333333',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255,255,255,0.44)',
      disabled: 'rgba(255,255,255,0.38)',
    },
  },
};

const theme = createTheme(themeOptions)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
