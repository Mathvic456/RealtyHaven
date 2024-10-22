import React from 'react';
import './AboutUs.css'; // Ensure you have your CSS file imported
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h1>About Us</h1>
            <p>
                Welcome to our company, where we are dedicated to revolutionizing the way individuals invest in real-life assets. Our mission is to make investment accessible, transparent, and rewarding for everyone. We believe that everyone should have the opportunity to grow their wealth and secure their financial future, regardless of their experience level in investing.
            </p>
            <p>
                At our core, we are a digital product designed to empower users by providing a platform that allows them to invest in tangible assets. This can be achieved by either purchasing tokens that represent a fraction of these assets or by making full payments for their investment. By utilizing innovative technology, we bridge the gap between traditional investment methods and the digital world, allowing users to diversify their portfolios with ease.
            </p>
            <p>
                Our platform is built on the principles of trust and integrity, ensuring that all transactions are secure and reliable. We understand the importance of making informed investment decisions, which is why we provide comprehensive data and insights about each asset available on our platform. Whether you are a seasoned investor or just starting your financial journey, we are here to support you every step of the way.
            </p>
            <p>
                Join us as we embark on this exciting journey to reshape the investment landscape. Together, we can unlock the potential of your investments and help you achieve your financial goals.
            </p>

            <h2>Our History</h2>
            <p>
                Our company was founded with the vision of democratizing investment opportunities. Over the years, we have grown from a small startup to a trusted platform that has empowered thousands of individuals to invest confidently in real assets. Our journey has been marked by innovation, commitment, and a strong focus on customer satisfaction, leading us to create a unique investment experience that caters to diverse needs.
            </p>

            <h2>Follow Us</h2>
            <div className="social-media-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={30} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                </a>
            </div>
        </div>
    );
};

export default AboutUs;
