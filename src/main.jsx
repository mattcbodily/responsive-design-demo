import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

///** UNCOMMENT FOR VANILLA AND BOOTSTRAP EXAMPLES **///
import './reset.css'

///** UNCOMMENT FOR TAILWIND LAYOUT EXAMPLE **///
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
