// src/components/Hero.js
import React from 'react';
import './Hero.css';
import Estate from '../assets/estate.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-texts">
                <div className="hero-heading">
                    <h1>Your <span className="highlight">Gateway</span> to state-of-the-art Real Estate Portfolios.</h1>
                </div>

                <div className="hero-subtext">
                    <p>
                        We believe in making real estate investment accessible to everyone. Invest in high-quality properties, own a piece of real estate, and let us handle the rest. Experience hassle-free investment with RealtyHaven.
                    </p>
                </div>
                
            </div>
            <div className="hero-image">
                <div className='image-holder'>
                <img src={Estate} alt="Estate property" />


                </div>
            </div>
        </section>
    );
};

export default Hero;
