import express from "express";

// Import authentication controller functions
import {
  register,
  login
} from "../Controllers/Auth.Controller.js";

// Create router object
const router = express.Router();

// Route for user registration
router.post("/register", register);

// Route for user login
router.post("/login", login);

// Export router
export default router;