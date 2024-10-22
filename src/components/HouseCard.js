import React from 'react';
import './HouseCard.css'; // Import styles for the HouseCard
import { Link } from 'react-router-dom';


const HouseCard = ({ house }) => {
    return (
    <Link to={`/property/${house.id}`} className="house-card">
    <img className="house-image" src={house.image} alt={house.name} />
    <div className="house-details">
        <p className="detail">Address: {house.address}</p>
        <p className="detail-price">Total Price: {house.totalPrice}</p>
        <p className="detail-price">Token Price: {house.tokenPrice}</p>
        <p className="detail">Expected Income: {house.income}</p>
        <p className="detail">Rent Start Date: {house.startDate}</p>
        <p className="detail-price">Price per Token: {house.pricePerToken}</p>
    </div>
    </Link>

    );
};

export default HouseCard;
