// src/components/OurValues.js
import React from 'react';
import './OurValues.css';

const values = [
    { title: 'Transparency', description: 'We prioritize clear and transparent processes to provide our users with full insight into each digital real estate investment.' },
    { title: 'Innovation in Real Estate', description: 'By leveraging blockchain and digital technologies, we make real estate investments accessible and secure in the digital space.' },
    { title: 'User-Centric Platform', description: 'Our platform is designed with our investors in mind, providing tools and resources for a seamless investment experience in digital assets.' },
    { title: 'Accessibility for All', description: 'We break down barriers to real estate investment, allowing individuals of all backgrounds to participate and build wealth.' },
    { title: 'Commitment to Security', description: 'We use cutting-edge security protocols to protect your investments and ensure the integrity of every transaction.' },
    { title: 'Global Reach', description: 'Our digital platform enables real estate investments that transcend geographical boundaries, offering users a diverse portfolio.' },
    { title: 'Sustainability in Investments', description: 'We aim to support sustainable development by prioritizing eco-friendly digital real estate opportunities.' },
];


const OurValues = () => {
    return (
        <div className="our-values">
            <h2>Our Values</h2>
            <div className="values-grid">
                {values.map((value, index) => (
                    <div className="value-card" key={index}>
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurValues;
