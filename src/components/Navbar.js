// Navbar.js
import React from 'react';
import '../components/Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to toggle menu

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle state
    };
    return (
        <nav className="navbar">
            <div className="logo">RealtyHaven</div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </nav>
    );
};

export default Navbar;
