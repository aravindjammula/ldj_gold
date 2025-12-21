import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom' // Changed from BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* HashRouter handles GitHub Pages paths perfectly */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)