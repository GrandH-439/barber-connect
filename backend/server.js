import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import bookingRoutes from "./routes/booking.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ API routes
app.use("/api/bookings", bookingRoutes);

// ✅ Base route (so you see something on Render)
app.get("/", (req, res) => {
  res.send("✅ GrandH backend is live and working!");
});

// ✅ (optional) serve frontend if exists
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.join(__dirname, "../frontend/build");

// Uncomment below ONLY if you later deploy frontend in same repo
// app.use(express.static(frontendPath));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(frontendPath, "index.html"));
// });

const PORT = process.env.PORT || 5000;

// ✅ IMPORTANT for Render: must listen on 0.0.0.0
app.listen(PORT, "0.0.0.0", () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
