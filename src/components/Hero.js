// Hero.js
import React from 'react';
import '../components/Hero.css';
import Navbar from './Navbar';




const Hero = () => {
    return (
        <section className="hero">
            
            <div className="hero-content">
                <h1><span className="brand-name">RealtyHaven</span> - Your Gateway to Real Estate Ownership</h1>
                <p>At <span className="brand-name">RealtyHaven</span>, we believe in making real estate investment accessible to everyone. Invest in high-quality properties, own a piece of real estate, and let us handle the rest.</p>
                <p>Experience hassle-free investment with <span className="brand-name">RealtyHaven</span>. Start building your portfolio today and enjoy passive income without worrying about tenants or maintenance.</p>
                <div className="hero-buttons">
                    <a href="/invest" className="hero-btn">Invest in Us</a>
                    <a href="/contact" className="hero-btn secondary-btn">Contact Us</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
