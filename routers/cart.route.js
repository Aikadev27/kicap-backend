const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const CartController = require("../controllers/Cart.controller");
router
  .get("/mycart", authMiddleware, CartController.displayCart)
  .post("/add", authMiddleware, CartController.addToCart)
  .delete("/delete/:id", authMiddleware, CartController.deleteProduct);

module.exports = router;
