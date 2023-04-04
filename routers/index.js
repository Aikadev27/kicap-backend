const UserRouter = require("../routers/authen.route");
const CategoryRouter = require("../routers/category.route");
const ProductRouter = require("../routers/product.route");
function router(app) {
  app.use("/api/product", ProductRouter);
  app.use("/api/category", CategoryRouter);
  app.use("/api/auth", UserRouter);
}

module.exports = router;
