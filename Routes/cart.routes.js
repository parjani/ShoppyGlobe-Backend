import express from "express";

import {
  addToCart,
  updateCart,
  deleteCart
} from "../Controllers/Cart.Controller.js";

import { authMiddleware } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/cart", authMiddleware, addToCart);

router.put("/cart/:id", authMiddleware, updateCart);

router.delete("/cart/:id", authMiddleware, deleteCart);

export default router;