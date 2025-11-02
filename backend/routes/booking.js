import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// ✅ Create a new booking
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, service, date, time, message } = req.body;

    // Validate input
    if (!name || !email || !phone || !service || !date || !time) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    // Save booking to MongoDB
    const newBooking = new Booking({
      name,
      email,
      phone,
      service,
      date,
      time,
      message,
    });

    await newBooking.save();

    res.status(201).json({
      message: "✅ Booking successful",
      booking: newBooking,
    });
  } catch (err) {
    console.error("❌ Server error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Get all bookings (optional, for testing)
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    console.error("❌ Fetch error:", err);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
});

export default router;
