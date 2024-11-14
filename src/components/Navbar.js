// src/components/Navbar.js
import React, { useState } from 'react';
import { FiMenu, FiArrowRight } from 'react-icons/fi'; // Importing the menu and arrow icons
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">RealtyHaven</div>
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#home" onClick={closeMenu}>Home</a></li>
                <li><a href="#home" onClick={closeMenu}>About Us</a></li>
                <li><a href="#home" onClick={closeMenu}>Properties</a></li>
                <li className="mobile-invest"><a href="#home" onClick={closeMenu}>Invest Now</a></li>
            </ul>
            {/* Invest button with icon for desktop */}
            <button className="invest-btn bounce-animation">
                Invest Now <FiArrowRight />
            </button>
            <div className="menu-icon" onClick={toggleMenu}>
                <FiMenu />
            </div>
        </nav>
    );
};

export default Navbar;
