import React from 'react';
import './AboutUs.css'; // Ensure you have your CSS file imported
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import { FaShieldAlt, FaRocket, FaUserFriends, FaRegStar } from 'react-icons/fa'; // Icons for values
import { FaUserTie, FaChalkboardTeacher, FaProjectDiagram } from 'react-icons/fa'; // Icons for team members
import { FaTrophy, FaAward, FaQuestionCircle } from 'react-icons/fa'; // Icons for achievements and FAQs

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

            <h2>Our Mission</h2>
            <p>
                Our mission is to democratize investment opportunities and empower individuals by providing a seamless platform that facilitates investments in real-life assets.
            </p>

            <h2>Our Values</h2>
            <div className="values-container">
                <div className="value-item">
                    <FaShieldAlt className="value-icon" />
                    <h3>Integrity</h3>
                    <p>We operate with transparency and honesty, ensuring that our users can trust our platform and services.</p>
                </div>
                <div className="value-item">
                    <FaRocket className="value-icon" />
                    <h3>Innovation</h3>
                    <p>We embrace new technologies and ideas to improve our services and enhance user experience.</p>
                </div>
                <div className="value-item">
                    <FaUserFriends className="value-icon" />
                    <h3>Customer-Centric</h3>
                    <p>Our users are at the heart of everything we do, and we strive to meet their needs and exceed their expectations.</p>
                </div>
                <div className="value-item">
                    <FaRegStar className="value-icon" />
                    <h3>Accessibility</h3>
                    <p>We aim to make investing simple and accessible for everyone, breaking down barriers to entry.</p>
                </div>
            </div>

            <h2>Meet Our Team</h2>
            <div className="values-container">
                <div className="value-item">
                    <FaUserTie className="value-icon" />
                    <h3>John Doe</h3>
                    <p><strong>CEO:</strong> With over 15 years of experience in finance, John leads our company with a vision of innovation and growth.</p>
                </div>
                <div className="value-item">
                    <FaChalkboardTeacher className="value-icon" />
                    <h3>Jane Smith</h3>
                    <p><strong>CTO:</strong> A tech enthusiast, Jane ensures that our platform utilizes the latest technologies for optimal performance.</p>
                </div>
                <div className="value-item">
                    <FaProjectDiagram className="value-icon" />
                    <h3>Emily Johnson</h3>
                    <p><strong>Head of Customer Success:</strong> Emily is dedicated to providing exceptional support and guidance to our users.</p>
                </div>
            </div>

            <h2>Achievements</h2>
            <div className="values-container">
                <div className="value-item">
                    <FaTrophy className="value-icon" />
                    <h3>10,000+ Users</h3>
                    <p>Over 10,000 satisfied users have chosen our platform to manage their investments.</p>
                </div>
                <div className="value-item">
                    <FaAward className="value-icon" />
                    <h3>Partnerships</h3>
                    <p>We have established partnerships with leading asset management firms to enhance our offerings.</p>
                </div>
                <div className="value-item">
                    <FaQuestionCircle className="value-icon" />
                    <h3>Industry Recognition</h3>
                    <p>Recognized as one of the top emerging fintech companies in 2023, we continue to innovate.</p>
                </div>
            </div>

            <h2>Frequently Asked Questions (FAQs)</h2>
            <div className="values-container">
                <div className="value-item">
                    <FaQuestionCircle className="value-icon" />
                    <h3>What types of assets can I invest in?</h3>
                    <p>We offer a variety of real-life assets, including real estate and commodities.</p>
                </div>
                <div className="value-item">
                    <FaQuestionCircle className="value-icon" />
                    <h3>How does the token system work?</h3>
                    <p>Each token represents a share of the asset, allowing you to invest according to your budget.</p>
                </div>
                <div className="value-item">
                    <FaQuestionCircle className="value-icon" />
                    <h3>Is my investment safe?</h3>
                    <p>Yes, we prioritize security and ensure that all transactions are conducted with the highest level of protection.</p>
                </div>
            </div>

            <h2>Follow Us</h2>
            <div className="social-media-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} className='team-icon' />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={30} className='team-icon' />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} className='team-icon' />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} className='team-icon' />
                </a>
            </div>

            <h2>Contact Us</h2>
            <p>
                If you have any questions or inquiries, feel free to reach out to us at <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>.
            </p>
        </div>
    );
};

export default AboutUs;
