import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  service: String,
  date: String,
  time: String,
});

export default mongoose.model("Booking", bookingSchema);
