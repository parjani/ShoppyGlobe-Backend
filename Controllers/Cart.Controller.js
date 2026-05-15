import cartModel from "../Models/Cart.Model.js";
import productModel from "../Models/Product.Model.js";

export async function addToCart(req, res) {
  try {

    const { productId, quantity } = req.body;

    const product = await productModel.findOne({
      productId: Number(productId)
    });

    if (!product) {
      return res.status(404).json({
        message: "Product does not exist"
      });
    }

    const productAlreadyAdded = await cartModel.findOne({
      productId: productId,
      username: req.user.username,
    });

    if (productAlreadyAdded) {
      return res.status(400).json({
        message: "Product already added"
      });
    }

    const cartItem = new cartModel({
      username: req.user.username,
      productId: productId,
      quantity
    });

    const savedCart = await cartItem.save();

    res.status(201).json(savedCart);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to add cart item"
    });
  }
}

export async function updateCart(req, res) {
  try {

    const { id } = req.params;

    const { quantity } = req.body;

    const updatedCart = await cartModel.findByIdAndUpdate(
      id,
      { quantity },
      { returnDocument: "after" }
    );

    res.status(200).json(updatedCart);

  } catch (error) {
    res.status(500).json({
      message: "Failed to update cart"
    });
  }
}

export async function deleteCart(req, res) {
  try {

    const { id } = req.params;

    await cartModel.findByIdAndDelete(id);

    res.status(200).json({
      message: "Cart item deleted"
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to delete cart item"
    });
  }
}