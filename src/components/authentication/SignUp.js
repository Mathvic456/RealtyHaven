import React from 'react';
import './SignUp.css'; // Ensure you have your CSS file imported
// import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { auth } from '../../firebase';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const db = getFirestore();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
    
          // Store additional user info in Firestore
          await setDoc(doc(db, 'users', user.uid), {
            name: name,
            phone: phone,
            email: email,
          });

        } catch (error) {
            console.error("Error signing up: ", error);
          }
        };


    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2 className="signup-title">Create Account</h2>
                <form className="signup-form" onSubmit={handleSignUp}>
                    <div className="input-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" placeholder="Enter your full name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" placeholder="Enter your phone number" required />
                    </div>
                    <button type="submit" className="signup-btn">Sign Up</button>
                </form>
                <p className="login-link">
                    Already have an account? <a href="/signin">Login</a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
