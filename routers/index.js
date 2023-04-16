const UserRouter = require("../routers/authen.route");
const CategoryRouter = require("../routers/category.route");
const ProductRouter = require("../routers/product.route");
const CartRouter = require("../routers/cart.route");
function router(app) {
  app.use("/api/product", ProductRouter);
  app.use("/api/category", CategoryRouter);
  app.use("/api/auth", UserRouter);
  app.use("/api/cart", CartRouter);
}

module.exports = router;
