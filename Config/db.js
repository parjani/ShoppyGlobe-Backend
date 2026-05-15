import mongoose from "mongoose";

// Function to connect MongoDB database
export async function connectDB() {
  try {

    // Connecting MongoDB using mongoose
    await mongoose.connect("mongodb://127.0.0.1:27017/shoppyglobe");

    // Success message after database connection
    console.log("MongoDB Connected");

  } catch (error) {

    // Error message if database connection fails
    console.log("Database Error", error);
  }
}