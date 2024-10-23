// Hero.js
import React from 'react';
import '../components/Hero.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';



const Hero = () => {
    return (
        <section className="hero">
            
            <div className="hero-content">
                <h1><span className="brand-name">RealtyHaven</span> - Your Gateway to Real Estate Ownership</h1>
                <p>At <span className="brand-name">RealtyHaven</span>, we believe in making real estate investment accessible to everyone. Invest in high-quality properties, own a piece of real estate, and let us handle the rest.</p>
                <p>Experience hassle-free investment with <span className="brand-name">RealtyHaven</span>. Start building your portfolio today and enjoy passive income without worrying about tenants or maintenance.</p>
                <div className="hero-buttons">
                    <Link to="/properties" className="hero-btn">Invest in Us</Link>
                    <Link to="Contact" className="hero-btn secondary-btn">Contact Us</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
