// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.js';
import HotelListingPage from './HotelListingPage.js';
import BookingPage from './Bookingpage.js';
import AboutPage from './About.js';
import router from './router.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels/:type" element={<HotelListingPage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
