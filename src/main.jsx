import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { sendToVercelAnalytics } from './vitals'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals(sendToVercelAnalytics)