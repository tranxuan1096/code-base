import App from 'App'
import React from 'react'
import ReactDOM from 'react-dom/client'

console.info(import.meta.env.VITE_API_URL)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
