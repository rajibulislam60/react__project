import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Navbar.jsx'
import Details from './Details.jsx'
import Features from './Features.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <>
    <Navbar/>
    <Details/>
    <Features/>
    <Footer/>
    </>
    
  </React.StrictMode>,
)
