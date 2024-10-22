import React, { useState } from 'react';
import HouseCard from './HouseCard'; // Import the HouseCard component
import './Properties.css'; // Ensure you have your CSS file imported
import { exclusiveHouses,soldHouses,upcomingHouses } from './data/HouseData';
const Properties = () => {
    const [activeTab, setActiveTab] = useState('exclusive'); // State to track the active tab

    const renderHouses = () => {
        switch (activeTab) {
            case 'exclusive':
                return exclusiveHouses.map((house, index) => (
                    <HouseCard key={index} house={house} />
                ));
            case 'upcoming':
                return upcomingHouses.map((house, index) => (
                    <HouseCard key={index} house={house} />
                ));
            case 'sold':
                return soldHouses.map((house, index) => (
                    <HouseCard key={index} house={house} />
                ));
            default:
                return null;
        }
    };

    return (
        <div className="house-listing-container">
            <div className="tabs">
                <button onClick={() => setActiveTab('exclusive')} className={activeTab === 'exclusive' ? 'active' : ''}>
                    Exclusive Listing
                </button>
                <button onClick={() => setActiveTab('upcoming')} className={activeTab === 'upcoming' ? 'active' : ''}>
                    Upcoming
                </button>
                <button onClick={() => setActiveTab('sold')} className={activeTab === 'sold' ? 'active' : ''}>
                    Sold
                </button>
            </div>
            <div className="house-grid">
                {renderHouses()}
            </div>
        </div>
    );
};

export default Properties;
