"use client";
import React, { useState } from 'react';
import './ContactUs.css'; // Import CSS file for styling

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log('Email:', email);
    console.log('Phone:', phone);
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-info">
        <div className="contact-item">
          <span>Email:</span>
          <a href="mailto:contact@example.com">contact@example.com</a>
        </div>
        <div className="contact-item">
          <span>Phone:</span>
          <span>123-456-7890</span>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
