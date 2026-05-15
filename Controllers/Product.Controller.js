import productModel from "../Models/Product.Model.js";

export async function getProducts(req, res) {
  try {
    const products = await productModel.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products"
    });
  }
}

export async function getSingleProduct(req, res) {
  try {
    const { id } = req.params;

    const product = await productModel.findOne({
      productId: Number(id)
    });

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json(product);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
}

export async function createProduct(req, res) {
  try {
    const newProduct = new productModel(req.body);

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);

  } catch (error) {
    res.status(500).json({
      message: "Unable to create product"
    });
  }
}