const express = require("express");
const UserController = require("../controllers/authen.controller");
const authMiddleware = require("../middleware/auth.middleware");
const veryfieMiddleware = require("../middleware/role.middleware");
const router = express.Router();
router
  .get("/", authMiddleware, UserController.auth)
  .get("/user", veryfieMiddleware.userRole, UserController.auth)
  .get("/admin", veryfieMiddleware.adminRole, UserController.auth)
  .post("/register", UserController.register)
  .post("/login", UserController.login);

module.exports = router;
