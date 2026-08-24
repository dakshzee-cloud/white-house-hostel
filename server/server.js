import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;


/* =========================================
   MIDDLEWARE
========================================= */

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());


/* =========================================
   ROUTES
========================================= */

app.get("/", (req, res) => {
  res.json({
    message: "White House Hostel API is running",
  });
});

app.use(
  "/api/bookings",
  bookingRoutes
);


/* =========================================
   DATABASE + SERVER
========================================= */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(
        `Server running on http://localhost:${PORT}`
      );
    });
  })
  .catch((error) => {
    console.error(
      "MongoDB connection failed:",
      error.message
    );
  });