const express = require("express");
const router = express.Router();
// const veryfieMiddleware = require("../middleware/role.middleware");
const CategoryController = require("../controllers/category.controller");
router
  .get("/", CategoryController.display)
  .get("/find/:query", CategoryController.findType)
  .get("/sort/ascending", CategoryController.sortAtoZ)
  .get("/sort/descending", CategoryController.sortZtoA)
  // cac thao tac voi category voi quyen admi
  .delete(
    "/delete/:_id",

    CategoryController.delete
  )
  .patch("/update/:_id", CategoryController.update)
  .post(
    "/create",

    CategoryController.createCategory
  );

module.exports = router;
