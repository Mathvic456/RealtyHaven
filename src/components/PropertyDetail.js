import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import './PropertyDetail.css';
import { exclusiveHouses, upcomingHouses, soldHouses } from './data/HouseData';

const PropertyDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Initialize useNavigate
    const houseData = [...exclusiveHouses, ...upcomingHouses, ...soldHouses];
    const house = houseData.find((house) => house.id === parseInt(id));

    const [activeTab, setActiveTab] = useState('details'); // Tab state

    if (!house) return <div>House not found.</div>;

    // Handle the invest button click to navigate to the payment page
    const handleInvest = () => {
        navigate('/payment', {
            state: {
                propertyName: house.address,
                tokenPrice: house.tokenPrice,
                totalPrice: house.totalPrice,
                walletAddress: 'your-crypto-wallet-address' // Replace with actual wallet address
            }
        });
    };

    return (
        <div className="property-detail-page">
            {/* Hero Section */}
            <div className="property-hero" style={{ backgroundImage: `url(${house.image})` }}>
                <div className="property-hero-overlay">
                    <h1 className="property-address">{house.address}</h1>
                    <p className="property-price">${house.totalPrice}</p>
                </div>
            </div>

            {/* Tab System */}
            <div className="property-tabs">
                <button
                    className={activeTab === 'details' ? 'active' : ''}
                    onClick={() => setActiveTab('details')}
                >
                    Property Details
                </button>
                <button
                    className={activeTab === 'investment' ? 'active' : ''}
                    onClick={() => setActiveTab('investment')}
                >
                    Investment Info
                </button>
            </div>

            {/* Tab Content */}
            <div className="property-content">
                {activeTab === 'details' && (
                    <div className="property-details-tab">
                        <p><strong>Expected Income:</strong> ${house.expectedIncome}</p>
                        <p><strong>Rent Start Date:</strong> {house.rentStartDate}</p>
                        <p><strong>Price Per Token:</strong> ${house.pricePerToken}</p>
                    </div>
                )}
                {activeTab === 'investment' && (
                    <div className="property-investment-tab">
                        <p><strong>Token Price:</strong> ${house.tokenPrice}</p>
                        <p>Enter the number of tokens you'd like to buy:</p>
                        <input type="number" placeholder="Enter token amount" />
                        <button onClick={handleInvest}>Invest Now</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PropertyDetail;
