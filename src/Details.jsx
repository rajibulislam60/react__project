import React from 'react'
import './Details.css'

const Details = () => {
  return (
    <div className="details">
        <div className="container">
            <div className="titleArea">
                <h2>How simple is it to use our platform?</h2>
                <p>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
            </div>
            <div className="detailsArea">
                <div className="itemArea">
                    <div className="item">
                        <div className="itemImg">
                        <img src="./images/Icon.png" alt="Icon" />
                    </div>
                    <h5>Login or sign up to be able use our platform</h5>
                    <p>This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>
                    </div>
                    <div className="item">
                        <div className="itemImg">
                        <img src="./images/Icon1.png" alt="Icon" />
                    </div>
                    <h5>Connect your website with just a few click</h5>
                    <p>Once your website is online, you can configure it, I will show you how to put your website online</p>
                    </div>
                    <div className="item">
                        <div className="itemImg">
                        <img src="./images/Icon2.png" alt="Icon" />
                    </div>
                    <h5>Take some sales data that you want</h5>
                    <p>Sell your data directly: The most straightforward method is to sell your data directly to another</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details