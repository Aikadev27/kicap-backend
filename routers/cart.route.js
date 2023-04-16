const express = require("express");
const router = express.Router();
const CartController = require("../controllers/Cart.controller");
router.get("/:userId/mycart", CartController.displayCart);
// .post("/:userId/add", CartController.addProductToCart);

module.exports = router;
