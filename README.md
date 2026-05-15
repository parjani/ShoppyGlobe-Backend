# ## ShoppyGlobe E-commerce Backend API

A complete backend API for the **ShoppyGlobe E-commerce Application** built using **Node.js, Express.js, MongoDB, and JWT Authentication**.

This project provides APIs for:

- Product Management
- Cart Management
- User Authentication
- Protected Routes using JWT
- MongoDB CRUD Operations
- API Testing with ThunderClient

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- ThunderClient

---

# Project Structure

```bash
ShoppyGlobe-Backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── product.controller.js
│   ├── cart.controller.js
│   └── auth.controller.js
│
├── middleware/
│   └── auth.middleware.js
│
├── models/
│   ├── Product.model.js
│   ├── Cart.model.js
│   └── User.model.js
│
├── routes/
│   ├── product.routes.js
│   ├── cart.routes.js
│   └── auth.routes.js
│
├── server.js
├── package.json
└── README.md
```

---

# Installation & Setup

## 1️ Clone Repository

```bash
git clone <your-github-repo-link>
```

## 2️ Install Dependencies

```bash
npm install
```

## 3 Run Server

```bash
npm run dev
```

OR

```bash
node server.js
```

---

# Base URL

```bash
http://localhost:3000
```

---

# API Endpoints

# Authentication APIs

## Register User

### POST `/register`

### Request Body

```json
{
  "name": "Parjani",
  "username": "parjani2004",
  "email": "parjani@gmail.com",
  "password": "123456"
}
```

### Response

```json
{
  "message": "User Registered Successfully"
}
```

---

## Login User

### POST `/login`

### Request Body

```json
{
  "username": "parjani2004",
  "password": "123456"
}
```

### Response

```json
{
  "token": "jwt_token"
}
```

---

# Product APIs

## Get All Products

### GET `/products`

### Response

```json
[
  {
    "_id": "123",
    "productId": 1,
    "name": "iPhone 15",
    "price": 80000,
    "description": "Apple Smartphone",
    "stockQuantity": 10
  }
]
```

---

## Get Single Product

### GET `/products/:id`

### Example

```bash
/products/3
```

---

# Cart APIs (Protected Routes)

> These routes require JWT Token

Add token in ThunderClient:

```bash
Authorization: your_token
```

---

## Add Product to Cart

### POST `/cart`

### Request Body

```json
{
  "productId": 3,
  "quantity": 2
}
```

### Response

```json
{
  "message": "Item added to cart"
}
```

---

## Update Cart Quantity

### PUT `/cart/:id`

### Request Body

```json
{
  "quantity": 5
}
```

---

## Delete Cart Item

### DELETE `/cart/:id`

---

# MongoDB Collections

## Products Collection

| Field | Type |
|------|------|
| name | String |
| price | Number |
| description | String |
| stock | Number |

---

## Cart Collection

| Field | Type |
|------|------|
| productId | Number |
| quantity | Number |
| username | String |

---

## Users Collection

| Field | Type |
|------|------|
| name | String |
| username | String |
| email | String |
| password | String (Hashed) |

---

# JWT Authentication

JWT Authentication is implemented using:

- jsonwebtoken
- bcryptjs

Protected Routes:

- POST `/cart`
- PUT `/cart/:id`
- DELETE `/cart/:id`

---

# Error Handling

Implemented proper error handling for:

- Invalid Product ID
- Product Not Found
- Unauthorized Access
- Invalid Login Credentials
- Missing Fields
- Server Errors

Example:

```json
{
  "message": "Product not found"
}
```

---

# Validation

Validation checks included:

- Required fields
- Valid email format
- Product existence check
- Quantity validation
- Duplicate user prevention

---

# ThunderClient Testing

All APIs were tested using ThunderClient.

Tested APIs:

- Register
- Login
- Get Products
- Get Single Product
- Add to Cart
- Update Cart
- Delete Cart

---

# Screenshots Included

The project includes screenshots for:

- MongoDB Collections
- ThunderClient API Testing
- JWT Token Authentication
- Cart Operations

## Google Drive Link for Screenshots

[View Screenshots Here](https://drive.google.com/file/d/1_yKFw6hgzHsbbrTfoeeKr35Q1X7C7Ou9/view?usp=sharing)

---
## GitHub Link
https://github.com/parjani/ShoppyGlobe-Backend
---
# Features

✅ REST API using Express.js  
✅ MongoDB Integration using Mongoose  
✅ JWT Authentication & Authorization  
✅ Protected Cart Routes  
✅ CRUD Operations  
✅ Error Handling  
✅ Validation  
✅ ThunderClient API Testing  

---