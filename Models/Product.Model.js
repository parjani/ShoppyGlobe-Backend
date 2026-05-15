import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

  productId: {
    type: Number,
    required: true
  },
  
  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  stockQuantity: {
    type: Number,
    required: true
  },

  image: {
    type: String
  }
});

const productModel = mongoose.model("products", productSchema);

export default productModel;