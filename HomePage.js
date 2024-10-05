// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const Homepage = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">RR</Link>
        </div>
        <div className="navbar-title">
          <h1>Welcome to RoamRover</h1>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      {/* Homepage Content */}
      <div className="home-container">
        <h2>Select the type of hotel you want to book:</h2>
        <div className="hotel-categories">
          <Link to="/hotels/5-star" className="category">5-Star Hotels</Link>
          <Link to="/hotels/basic" className="category">Basic Hotels</Link>
          <Link to="/hotels/Villas" className="category">Villas</Link>
          <Link to="/hotels/Homestays" className="category">Homestays</Link>
          <Link to="/hotels/Hostels" className="category">Hostels</Link>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section" id="about">
        <h2>About RoamRover</h2>
        <p>
          RoamRover is your go-to destination for booking hotels across various categories ranging from luxurious 5-star hotels to budget-friendly lodges and dorms.
          Our agenda is to provide seamless, reliable, and affordable options to cater to every traveler’s needs.
        </p>
      </div>
    </>
  );
};

export default Homepage;
