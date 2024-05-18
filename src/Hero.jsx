import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
        <div className="hero">
            <div className="container">
                <h1>Get your work done with Management Tool</h1>
                <p>The world's first project management platform that connects everything</p>
                <div className="hero__search">
                    <input className='search' type="text" placeholder='Your business email'/>
                    <button className='btn'>Try for free</button>
                </div>
                <div className="hero__img">
                    <img className='laptop' src="./images/Laptop Screen.png" alt="Laptop Screen" />
                    {/* <img className='screenImg' src="./images/screenImg.jpg" alt="screenImg" /> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero