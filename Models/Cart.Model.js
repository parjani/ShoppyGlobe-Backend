import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  productId: {
    type: Number,
    required: true
  },

  quantity: {
    type: Number,
    default: 1
  }
});

const cartModel = mongoose.model("cart", cartSchema);

export default cartModel;