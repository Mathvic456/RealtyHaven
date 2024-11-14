// src/components/WhyUs.js
import React from 'react';
import './WhyUs.css';
// import MissionImage from '../assets/mission-image.jpg'; // Replace with the actual path to your image

const WhyUs = () => {
    return (
        <section className="why-us-container">
            <h1 className="why-us-header">Why Us?</h1>
            <div className="why-us-content">
                {/* Left Text Section */}
                <div className="why-us-text">
    <p>
        Welcome to our platform, where we are pioneering the future of digital real estate investment. Our mission is to make high-value, secure, and accessible real estate investment opportunities available to everyone, regardless of location or investment experience.
    </p>
    <p>
        As a cutting-edge digital platform, we empower users to invest in digital real estate assets by either purchasing fractional ownership through tokens or making full investments. We combine blockchain technology with real estate to create a seamless and transparent experience that bridges the gap between traditional property investment and the digital landscape.
    </p>
    <p>
        Trust and integrity are at the core of our platform, ensuring every transaction is safe and transparent. We provide our investors with comprehensive data, insights, and analytics for each asset, enabling informed decisions and building confidence in their investments. Whether you’re new to digital investments or an experienced investor, our platform is designed to support and grow with you.
    </p>
    <p>
        Join us in shaping the future of real estate through innovative digital solutions. Together, we can unlock the potential of your investments and help you achieve financial growth in the dynamic world of digital real estate.
    </p>
</div>


                {/* Right Mission Card Section */}
                <div className="why-us-card">
                    <h2>Our Mission</h2>
                    <div className="mission">
                        <p>Our mission is to democratize access to real estate investment through digital innovation, making it accessible, secure, and rewarding for all.</p>
                    </div>
                    <div className="mission">
                        <p>We strive to empower individuals by providing a seamless platform that enables investments in digital real estate assets, removing traditional barriers to entry.</p>
                    </div>
                    <div className="mission">
                        <p>Our mission is built on transparency and security, ensuring that every transaction on our platform is reliable and each asset is thoroughly vetted.</p>
                    </div>
                    <div className="mission">
                        <p>We are committed to reshaping the future of real estate by offering innovative digital solutions that open up new possibilities for wealth creation.</p>
                    </div>
                    {/* <img src={MissionImage} alt="Mission" className="mission-image" /> */}
                </div>

            </div>
        </section>
    );
};

export default WhyUs;
