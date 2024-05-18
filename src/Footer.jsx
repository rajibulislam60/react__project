import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="footerArea">
                <div className="leftsideArea">
                    <div className="footerLogo">
                        <img src="./images/LogoC.png" alt="LogoC" />
                    </div>
                    <div className="textArea">
                        <p>Build a modern and creative website with Innovate.</p>
                        <div className="footerIcon">
                            <ul>
                                <li><a href="#"></a><i className="fa-brands fa-google"></i></li>
                                <li><a href="#"></a><i className="fa-brands fa-twitter"></i></li>
                                <li><a href="#"></a><i className="fa-brands fa-instagram"></i></li>
                                <li><a href="#"></a><i className="fa-brands fa-linkedin"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="rightsideArea">
                    <div className="listItem">
                        <h4>Product</h4>
                        <ul>
                            <li><a href="#"></a>Landingpages</li>
                            <li><a href="#"></a>Pricing</li>
                            <li><a href="#"></a>Benefits</li>
                            <li><a href="#"></a>Features</li>
                        </ul>
                    </div>
                    <div className="listItem">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#"></a>About</li>
                            <li><a href="#"></a>Privacy Policy</li>
                            <li><a href="#"></a>Terms & Conditions</li>
                            <li><a href="#"></a>Partners</li>
                            <li><a href="#"></a>Contact</li>
                        </ul>
                    </div>
                    <div className="listItem">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#"></a>Guides and resources</li>
                            <li><a href="#"></a>Blog</li>
                            <li><a href="#"></a>Tools</li>
                            <li><a href="#"></a>Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer