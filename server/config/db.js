import dns from "node:dns";
import mongoose from "mongoose";

// Use reliable public DNS for MongoDB SRV lookup
dns.setServers([
  "8.8.8.8",
  "1.1.1.1",
]);

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log(
      `MongoDB Connected: ${connection.connection.host}`
    );
  } catch (error) {
    console.error(
      `MongoDB Connection Error: ${error.message}`
    );

    throw error;
  }
};

export default connectDB;