import express from "express";

// Import product controller functions
import {
  getProducts,
  getSingleProduct,
  createProduct
} from "../Controllers/Product.Controller.js";

// Create router object
const router = express.Router();

// Route to get all products
router.get("/products", getProducts);

// Route to get single product by ID
router.get("/products/:id", getSingleProduct);

// Route to create new product
router.post("/products", createProduct);

// Export router
export default router;