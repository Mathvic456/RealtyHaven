// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Your <span className="highlight">Gateway</span> to state-of-the-art <span className='highlight'>Digital</span> Real Estate Portfolios.</h1>
                <p>
                    We believe in making real estate investment accessible to everyone either digitally or in-person. With us you can digitally invest in high-quality properties, own a piece of real estate, and let us handle the rest. Experience and enjoy hassle-free investment with RealtyHaven.
                </p>
            </div>
            <div className="hero-image">
                <img src="https://via.placeholder.com/600x400" alt="Real estate property" />
            </div>
        </section>
    );
};

export default Hero;
