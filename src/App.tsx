import { ErrorBoundary } from '@components/common'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import configAppRoutes from 'routes'
import { ThemeProvider } from './theme'

function App() {
  const routes = useRoutes(configAppRoutes)

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>{routes}</ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
