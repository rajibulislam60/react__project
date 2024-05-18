import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <div className="features">
        <div className="container">
            <div className="featuresArea">
                <div className="featuresImg">
                    <img src="./images/Elements.png" alt="Elements" />
                </div>
                <div className="featuresItem__area">
                    <div className="featuresTitle">
                        <h2>We provide features for your Business</h2>
                    </div>
                    <div className="featuresItem__one">
                        <div className="itemchild">
                            <div className="itemImg">
                                <img src="./images/ficon.png" alt="ficon" />
                            </div>
                            <h5>Fast and Easy to use</h5>
                            <p>Easily to convert API with just a few clicks</p>
                        </div>
                        <div className="itemchild">
                            <div className="itemImg">
                                <img src="./images/ficon1.png" alt="ficon" />
                            </div>
                            <h5>Safely Security</h5>
                            <p>All customer data is encrypted</p>
                        </div>
                    </div>
                    <div className="featuresItem__two">
                        <div className="itemchild">
                            <div className="itemImg">
                                <img src="./images/ficon1.png" alt="ficon" />
                            </div>
                            <h5>Get Organized</h5>
                            <p>From lists to boards, organize work your way.</p>
                        </div>
                        <button className='btn'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features