// src/components/About.js
import React from 'react';
import './AboutUs.css';
import WhyUs from './WhyUs';
import OurValues from './OurValues';
import MeetTheTeam from './MeetTheTeam';

const About = () => {
    return (
        <section className="about-section">
            <WhyUs />
            <OurValues />
            <MeetTheTeam />
        </section>
    );
};

export default About;
