import express from "express";

import { connectDB } from "./Config/db.js";

import productRoutes from "./Routes/product.routes.js";
import cartRoutes from "./Routes/cart.routes.js";
import authRoutes from "./Routes/auth.routes.js";

const app = express();


app.use(express.json());

connectDB();

app.use((req, res, next) => {
  console.log(`Method Details:
    Method: ${req.method}
    URL: ${req.url}
    Status Code: ${res.statusCode}
  `);

  next();
});

app.use("/api", productRoutes);

app.use("/api", cartRoutes);

app.use("/api", authRoutes);

app.listen(3000, () => {
  console.log("Server Running On Port 3000");
});