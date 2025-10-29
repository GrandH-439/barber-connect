require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// ===== Middleware =====
app.use(cors());
app.use(express.json());

// ===== MongoDB Connection =====
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/barberconnect';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.log('❌ MongoDB connection error:', err));

// ===== Booking Schema =====
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  date: String,
  time: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

// ===== Routes =====
app.get('/', (req, res) => {
  res.json({ message: '💈 Barber Connect API is running!' });
});

// Get all bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new booking (with email notification)
app.post('/api/bookings', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();

    // ===== Send Email Notification =====
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Grand H Barber Shop" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // send to your inbox
      subject: '💈 New Booking Received',
      text: `
New booking received:

Name: ${savedBooking.name}
Email: ${savedBooking.email}
Phone: ${savedBooking.phone}
Service: ${savedBooking.service}
Date: ${savedBooking.date}
Time: ${savedBooking.time}
Message: ${savedBooking.message || 'No message'}

— Grand H Booking System
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('📧 Email sent successfully!');

    res.status(201).json(savedBooking);
  } catch (error) {
    console.error('❌ Error creating booking:', error);
    res.status(400).json({ error: error.message });
  }
});

// ===== Start Server =====
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
