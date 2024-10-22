import React from 'react';
import { useParams } from 'react-router-dom';
import './PropertyDetail.css';
// Import the house data
import { exclusiveHouses, upcomingHouses, soldHouses } from './data/HouseData'; // Adjust the path as necessary

const PropertyDetail = () => {
    const { id } = useParams(); // Get the ID from the URL

    // Combine all house data into one array for easy searching
    const houseData = [
        ...exclusiveHouses,
        ...upcomingHouses,
        ...soldHouses,
    ];

    const house = houseData.find((house) => house.id === parseInt(id)); // Find the house by ID

    if (!house) return <div>House not found.</div>;

    return (
        <div className="property-detail-container">
            <h2>{house.address}</h2>
            <img 
                className="property-main-image" 
                src={house.image} 
                alt={house.address} 
            />
            <div className="property-details">
                <p><strong>Total Price:</strong> ${house.totalPrice}</p>
                <p><strong>Token Price:</strong> ${house.tokenPrice}</p>
                <p><strong>Expected Income:</strong> ${house.expectedIncome}</p>
                <p><strong>Rent Start Date:</strong> {house.rentStartDate}</p>
                <p><strong>Price per Token:</strong> ${house.pricePerToken}</p>
                <h3>More Images:</h3>
                {/* Additional images can be added similarly */}
                {/* Uncomment if you have additional images in your house data */}
                {/* <img src={house.additionalImage1} alt="Additional" /> */}
                {/* <img src={house.additionalImage2} alt="Additional" /> */}
            </div>
            <button className="invest-button">Invest</button>
        </div>
    );
};

export default PropertyDetail;
