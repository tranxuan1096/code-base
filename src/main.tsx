import App from '@/app/App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { useTheme } from '@/hooks/useTheme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ErrorBoundary } from './app/ErrorBoundary'

const theme = useTheme()

console.log(import.meta.env.VITE_URL_API)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
)
