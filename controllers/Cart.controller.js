const CartModel = require("../models/Cart.model");
// const User = require("../models/User.model");
// const ProductModel = require("../models/Product.model");
class Cart {
  async displayCart(req, res) {
    await CartModel.findOne()
      .populate("userId")
      .then((result) => {
        // res.send("hello");
        res.send(result);
      })
      .catch((err) => console.log(err));
    // await CartModel.findOne({ userId })
    //   .populate("userId")
    //   .then((result) => res.send(result))
    //   .catch((error) => {
    //     console.log(error);
    //     res.status(500).send({ message: "Internal server error" });
    //   });
  }
}

module.exports = new Cart();
