import React from 'react';
import { useParams, Link } from 'react-router-dom';
import hotelData from './hotelData';
import './HotelListingPage.css';

const HotelListingPage = () => {
  const { type } = useParams(); // Capture the type parameter from the URL
  const hotels = hotelData[type] || []; // Get hotels based on the type, or return an empty array if not found

  return (
    <div className="hotel-listing-container">
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)} Hotels</h2> {/* Capitalize the first letter */}
      <div className="hotel-list">
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              <img src={`/images/${hotel.image}`} alt={hotel.name} className="hotel-image" />
              <div className="hotel-info">
                <h3>{hotel.name}</h3>
                <p>Location: {hotel.location}</p>
                <p>Price: {hotel.price}</p>
                {/* Add a 'Book Now' button that redirects to the Booking Page */}
                <Link to={`/booking/${hotel.id}`}>
                  <button className="book-button">Book Now</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No hotels available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default HotelListingPage;
