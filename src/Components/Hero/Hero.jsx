import React from 'react'
import './Hero.css'
import hero_image from '../Assets/hero_image.jpg'
const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
            <h2>Shop New Products</h2>
            </div>
            <div className="text">
            <p>New Collections<br />for All</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
            </div>
            <div className="hero-right">
            <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero