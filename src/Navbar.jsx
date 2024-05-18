import React from 'react'
import './Navbar.css'
import Hero from './Hero'

const Navbar = () => {

  let logClick = ()=>{
    console.log('login');
  }
  let regClick = ()=>{
    console.log('register');
  }

  return (
    <>
    <div className="navbar">
      <div className="container">
        <nav>
        <div>
            <img src="./images/Logo.png" alt="Logo" />
        </div>
        <ul>
            <li><a href="#">Home <i className="fa-solid fa-chevron-down"></i></a></li>
            <li><a href="#">Features <i className="fa-solid fa-chevron-down"></i></a></li>
            <li><a href="#">Service <i className="fa-solid fa-chevron-down"></i></a></li>
            <li><a href="#">Pages <i className="fa-solid fa-chevron-down"></i></a></li>
            <li><a href="#">Blog <i className="fa-solid fa-chevron-down"></i></a></li>
        </ul>
        <div className='btn'>
          <button onClick={logClick}>Login</button>
          <button onClick={regClick}>Register</button>
        </div>
     </nav>
      </div>
      <Hero/>
    </div>
    </>
  )
}

export default Navbar