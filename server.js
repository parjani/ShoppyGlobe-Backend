import express from "express";

// Import database connection function
import { connectDB } from "./Config/db.js";

// Import all route files
import productRoutes from "./Routes/product.routes.js";
import cartRoutes from "./Routes/cart.routes.js";
import authRoutes from "./Routes/auth.routes.js";

// Create express application
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Connect MongoDB database
connectDB();

// Custom middleware for request logging
app.use((req, res, next) => {
  console.log(`Method Details:
    Method: ${req.method}
    URL: ${req.url}
    Status Code: ${res.statusCode}
  `);

  // Move to next middleware or route
  next();
});

// Product routes
app.use("/api", productRoutes);

// Cart routes
app.use("/api", cartRoutes);

// Authentication routes
app.use("/api", authRoutes);

// Start server on port 3000
app.listen(3000, () => {
  console.log("Server Running On Port 3000");
});