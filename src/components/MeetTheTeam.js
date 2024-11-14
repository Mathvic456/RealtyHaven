// src/components/InvestorsTestaments.js
import React from 'react';
import './MeetTheTeam.css';

const testimonials = [
    {
        name: 'Alice Williams',
        investmentType: 'Digital Real Estate Investor',
        testament: 'Investing here has been transformative. The platform is secure, transparent, and opens up opportunities I never thought possible. The future of real estate is digital!',
    },
    {
        name: 'Michael Brown',
        investmentType: 'Tokenized Asset Investor',
        testament: 'As a first-time investor, I’m thrilled to find an accessible way to diversify my portfolio with digital real estate. It’s a smart way to grow my wealth!',
    },
    {
        name: 'Sarah Johnson',
        investmentType: 'Fractional Ownership Investor',
        testament: 'This platform allows me to invest in real estate at my comfort level. The process is smooth, and I feel supported at every step.',
    },
];

const MeetTheTeam = () => {
    return (
        <div className="investors-testaments">
            <h2>Investor's Testaments</h2>
            <div className="testament-grid">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <h3>{testimonial.name}</h3>
                        <p className="investment-type">{testimonial.investmentType}</p>
                        <p className="testament">{testimonial.testament}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MeetTheTeam;
