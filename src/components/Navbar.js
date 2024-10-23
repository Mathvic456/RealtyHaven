import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Import menu icon
import '../components/Navbar.css';
import SignIn from './authentication/SignIn';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">RealtyHaven</div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='Properties'>Properties</Link></li>
                <li><Link to='AboutUs'>About Us</Link></li>
                <li><Link to='Contact'>Contact Us</Link></li>
                <li><Link to='Login-Page'>Login</Link></li>

            </ul>
            <div className="menu-icon" onClick={toggleMenu}>
                <FaBars size={22} color='#5170fe'/> {/* Menu icon */}
            </div>
        </nav>
    );
};

export default Navbar;
