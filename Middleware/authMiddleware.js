import jwt from "jsonwebtoken";

// To verify the token by matching with key
export function authMiddleware(req, res, next) {

  try {

    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "Access Denied"
      });
    }

    const verified = jwt.verify(token, "secretkey");

    req.user = verified;

    next();

  } catch (error) {

    res.status(401).json({
      message: "Invalid Token"
    });
  }
}