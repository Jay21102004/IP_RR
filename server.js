// server.js or app.js
import './BookingForm.js'
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Send confirmation email function
const sendConfirmationEmail = (recipientEmail, bookingDetails) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Booking Confirmation',
    text: `Thank you for your booking!\n\nHere are your booking details:\n${bookingDetails}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

// Booking endpoint
app.post('/api/book', async (req, res) => {
  const { email, bookingDetails } = req.body; // Get email and booking details from request

  // Example: Save booking to the database (you may want to implement this)
  // await saveBookingToDatabase(bookingDetails);

  // Send confirmation email
  sendConfirmationEmail(email, bookingDetails);

  res.status(200).json({ message: 'Booking successful! Confirmation email sent.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
