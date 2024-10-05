// src/components/BookingForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './BookingForm.css'; // Import the CSS file

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hotelName: '',
    checkIn: '',
    checkOut: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/book', {
        email: formData.email,
        bookingDetails: `
          Name: ${formData.name}
          Hotel Name: ${formData.hotelName}
          Check-in Date: ${formData.checkIn}
          Check-out Date: ${formData.checkOut}
        `,
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error booking hotel', error);
      alert('Failed to book the hotel. Please try again.');
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Book Your Hotel</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="hotelName"
          placeholder="Hotel Name"
          value={formData.hotelName}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          required
        />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
