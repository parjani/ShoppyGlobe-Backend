import express from "express";

// Import cart controller functions
import {
  addToCart,
  updateCart,
  deleteCart
} from "../Controllers/Cart.Controller.js";

// Import authentication middleware
import { authMiddleware } from "../Middleware/authMiddleware.js";

// Create router object
const router = express.Router();

// Route to add product into cart
router.post("/cart", authMiddleware, addToCart);

// Route to update cart product quantity
router.put("/cart/:id", authMiddleware, updateCart);

// Route to delete cart item
router.delete("/cart/:id", authMiddleware, deleteCart);

// Export router
export default router;