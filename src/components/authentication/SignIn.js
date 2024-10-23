import React from 'react';
import './SignIn.css'; // Ensure you have your CSS file imported
import { Link } from 'react-router-dom';


const SignIn = () => {
    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Welcome Back</h2>
                <form className="login-form">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" required />
                    </div>
                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
                <p className="signup-link">
                    Don't have an account?<Link to="/signup">Sign Up</Link>

                </p>
            </div>
        </div>
    );
};

export default SignIn;
