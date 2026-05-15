import express from "express";

import {
  getProducts,
  getSingleProduct,
  createProduct
} from "../Controllers/Product.Controller.js";

const router = express.Router();

router.get("/products", getProducts);

router.get("/products/:id", getSingleProduct);

router.post("/products", createProduct);

export default router;