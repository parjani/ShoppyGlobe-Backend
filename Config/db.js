import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/shoppyglobe");

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Database Error", error);
  }
}