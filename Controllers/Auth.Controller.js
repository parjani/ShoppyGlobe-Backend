import userModel from "../Models/User.Model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function register(req, res) {

  try {

    const { name, username, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      name,
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({
      message: "User Registered Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: "Registration Failed"
    });
  }
}

export async function login(req, res) {

  try {

    const { username, password } = req.body;

    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Username"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password"
      });
    }

    const token = jwt.sign(
      { username: user.username },
      "secretkey",
      { expiresIn: "1d" }
    );

    res.status(200).json({
      token
    });

  } catch (error) {

    res.status(500).json({
      message: "Login Failed"
    });
  }
}