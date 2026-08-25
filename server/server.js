import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;


// =========================================
// MIDDLEWARE
// =========================================

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());


// =========================================
// ROUTES
// =========================================

app.get("/", (req, res) => {
  res.json({
    message: "White House Hostel API is running",
  });
});

app.use(
  "/api/bookings",
  bookingRoutes
);


// =========================================
// START SERVER
// =========================================

const startServer = async () => {
  try {

    await connectDB();

    app.listen(PORT, () => {
      console.log(
        `Server running on http://localhost:${PORT}`
      );
    });

  } catch (error) {

    console.error(
      "Server startup failed:",
      error.message
    );

    process.exit(1);
  }
};

startServer();