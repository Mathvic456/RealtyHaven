import React, { useState } from 'react';
import './ContactUs.css'; // Import CSS for styling

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false); // State to track submission

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to API)
        console.log(formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            message: '',
        });
        setSubmitted(true); // Show success message
        setTimeout(() => setSubmitted(false), 3000); // Hide success message after 3 seconds
    };

    return (
        <div className="contact-us-container">
            <h1>Contact Us</h1>
            <p>
                We would love to hear from you! Whether you have a question about our services, need assistance,
                or just want to give feedback, feel free to reach out. Please fill out the form below, and we will
                get back to you as soon as possible.
            </p>
            <p>
                Alternatively, you can also reach us through the following contact details:
            </p>
            <div className="contact-details">
                <p><strong>Email:</strong> support@yourcompany.com</p>
                <p><strong>Phone:</strong> +123 456 7890</p>
                <p><strong>Address:</strong> 123 Your Street, Your City, Your Country</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
            {submitted && <div className="success-message">Thank you! Your message has been sent.</div>}
        </div>
    );
};

export default ContactUs;
