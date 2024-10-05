import React from 'react';
import { useParams } from 'react-router-dom';
import hotelData from './hotelData';
import './BookingPage.css';

const BookingPage = () => {
  const { id } = useParams(); // Get the hotel ID from the URL
  let hotelDetails = null;

  // Find hotel details based on the ID
  Object.values(hotelData).forEach((category) => {
    const foundHotel = category.find(hotel => hotel.id === parseInt(id));
    if (foundHotel) {
      hotelDetails = foundHotel;
    }
  });

  return (
    <div className="booking-container">
      {hotelDetails ? (
        <div>
          <h2>Booking Form for {hotelDetails.name}</h2>
          <p>Location: {hotelDetails.location}</p>
          <p>Price: {hotelDetails.price}</p>
          {/* Include the booking form here */}
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />

            <label htmlFor="date">Check-in Date:</label>
            <input type="date" id="date" required />

            <label htmlFor="nights">Number of Nights:</label>
            <input type="number" id="nights" min="1" required />

            <button type="submit">Confirm Booking</button>
          </form>
        </div>
      ) : (
        <p>Hotel not found.</p>
      )}
    </div>
  );
};

export default BookingPage;
