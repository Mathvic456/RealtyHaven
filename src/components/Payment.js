import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css'; // Import CSS

const Payment = () => {
    const location = useLocation();
    const { propertyName, tokenPrice } = location.state;
    
    const [tokenAmount, setTokenAmount] = useState(0);
    const [calculatedPrice, setCalculatedPrice] = useState(0);
    const [showOverlay, setShowOverlay] = useState(false);
    
    const walletAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'; // Sample BTC wallet address
    const btcConversionRate = 0.000034; // Assume 1 USD = 0.000034 BTC (Example rate, you can fetch dynamically in real case)

    const handleTokenChange = (e) => {
        const amount = parseInt(e.target.value) || 0;
        setTokenAmount(amount);
        setCalculatedPrice(amount * tokenPrice);
    };

    const handleProceedToPayment = () => {
        setShowOverlay(true);
    };

    const handleCloseOverlay = () => {
        setShowOverlay(false);
    };

    const equivalentInBTC = (calculatedPrice * btcConversionRate).toFixed(6);

    return (
        <div className="payment-container">
            <h2>Invest in {propertyName}</h2>

            <p><strong>Price per Token:</strong> ${tokenPrice.toFixed(2)}</p>

            <label htmlFor="tokenAmount">Enter number of tokens to purchase:</label>
            <input
                type="number"
                id="tokenAmount"
                value={tokenAmount}
                onChange={handleTokenChange}
                placeholder="Enter token amount"
            />

            <p className="total-price-info">
                Total Price for {tokenAmount} tokens: ${calculatedPrice.toFixed(2)}
            </p>

            <button onClick={handleProceedToPayment}>Proceed to Payment</button>

            {showOverlay && (
                <div className="overlay">
                    <div className="overlay-content">
                        <span className="close" onClick={handleCloseOverlay}>&times;</span>
                        <h3>Payment Instructions</h3>
                        <p>Please send the equivalent of <strong>${calculatedPrice.toFixed(2)}</strong> to the following Bitcoin wallet:</p>
                        <p className="wallet-address">{walletAddress}</p>
                        <p><strong>Equivalent in BTC:</strong> {equivalentInBTC} BTC</p>
                        <p>After payment, please confirm your transaction.</p>
                        <button onClick={handleCloseOverlay}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Payment;
