import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
     <nav>
        <div>
            <img src="./images/Logo.png" alt="Logo" />
        </div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
        </ul>
        <div className='btn'>
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
     </nav>
    </>
  )
}

export default Navbar