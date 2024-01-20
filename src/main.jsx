import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

///** UNCOMMENT FOR VANILLA EXAMPLE **///

import './reset.css'


///** UNCOMMENT FOR BOOTSTRAP LAYOUT EXAMPLE **///

// import 'bootstrap/dist/css/bootstrap.min.css';


///** UNCOMMENT FOR TAILWIND LAYOUT EXAMPLE **///

// import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
