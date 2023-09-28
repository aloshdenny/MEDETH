import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DataContextProvider } from './DataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataContextProvider> 
)
