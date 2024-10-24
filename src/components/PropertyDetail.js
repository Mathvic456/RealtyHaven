import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PropertyDetail.css';
import { exclusiveHouses, upcomingHouses, soldHouses } from './data/HouseData';

const PropertyDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const houseData = [...exclusiveHouses, ...upcomingHouses, ...soldHouses];
    const house = houseData.find((house) => house.id === parseInt(id));

    const [showOverlay, setShowOverlay] = useState(false);

    if (!house) return <div>House not found.</div>;

    const handleInvest = () => {
        navigate('/payment', {
            state: {
                propertyName: house.address,
                tokenPrice: house.tokenPrice,
                totalPrice: house.totalPrice,
                walletAddress: 'your-crypto-wallet-address'
            }
        });
    };

    return (
        <div className="property-detail-container">
            <h2>{house.address}</h2>
            <img className="property-main-image" src={house.image} alt={house.address} />
            <div className="property-details">
                <p><strong>Total Price:</strong> ${house.totalPrice}</p>
                <p><strong>Token Price:</strong> ${house.tokenPrice}</p>
                <p><strong>Expected Income:</strong> ${house.expectedIncome}</p>
                <button className="show-more-button" onClick={() => setShowOverlay(true)}>Show More Photos</button>
            </div>
            <button className="invest-button" onClick={handleInvest}>Invest</button>

            {showOverlay && (
                <div className="overlay">
                    <div className="overlay-content">
                        <span className="close" onClick={() => setShowOverlay(false)}>&times;</span>
                        <h3>Additional Images</h3>
                        <img src={house.image} alt="Additional" className="overlay-image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PropertyDetail;
