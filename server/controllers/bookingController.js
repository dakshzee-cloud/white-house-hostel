import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      guests,
      roomType,
      checkIn,
      checkOut,
      message,
    } = req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !roomType ||
      !checkIn ||
      !checkOut
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      return res.status(400).json({
        success: false,
        message: "Check-out must be after check-in.",
      });
    }

    const booking = await Booking.create({
      name,
      email,
      phone,
      guests: Number(guests) || 1,
      roomType,
      checkIn,
      checkOut,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Booking request submitted successfully.",
      booking,
    });

  } catch (error) {
    console.error("Booking Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};