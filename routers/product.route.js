const express = require("express");
const ProductController = require("../controllers/product.controller");
const router = express.Router();
// const veryfieMiddleware = require("../middleware/role.middleware");

router.get("/", ProductController.displayProduct);
router.post("/create", ProductController.addProduct);
// cac thao tac voi product quyen admin
router.delete("/delete/:_id", ProductController.delete);
router.delete("/deleteAll", ProductController.deleteAll);
router.patch("/update/:_id", ProductController.update);
module.exports = router;
