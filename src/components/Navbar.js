// Navbar.js
import React from 'react';
import '../components/Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to toggle menu

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle state
    };
    return (
        <nav className="navbar">
            <div className="logo">RealtyHaven</div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='Properties'>Properties</Link></li>
                <li><Link to='AboutUs'>About Us</Link></li>
                <li><Link to='Contact'>Contact Us</Link></li>
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
