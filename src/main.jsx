import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>
      <div className="container">
    <Navbar/>
    <Hero/>
    </div>
    </header>
    
  </React.StrictMode>,
)
