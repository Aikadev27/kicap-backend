const CartModel = require("../models/Cart.model");

class Cart {
  async displayCart(req, res) {
    const userId = req.user._id;
    await CartModel.findOne({ userId })
      .populate("products.productId")
      .then((result) => {
        res.send(result);
      })
      .catch((err) => console.log(err));
  }
  async addToCart(req, res) {
    try {
      const userId = req.user._id;
      const { productId, quantity } = req.body;
      const cart = await CartModel.findOne({ userId });
      let products = cart.products;

      let exist = false;

      products = products.map((e) => {
        if (e.productId === productId) {
          e.quantity += quantity;
          exist = true;
        }

        return e;
      });

      if (!exist) {
        products = [...products, { productId, quantity }];
      }

      await cart.updateOne({ products });
      const newcart = await CartModel.findOne({ userId });
      res.send(newcart);
    } catch (error) {
      console.log(error);
    }
  }
  async deleteProduct(req, res) {
    const userId = req.user._id;
    // console.log(userId);
    const { id: productId } = req.params;
    const cart = await CartModel.findOne({ userId });
    const products = cart.products.filter(
      (e) => e.productId.toString() !== productId
    );

    const updatedCart = await cart.updateOne({ products });

    res.send(updatedCart);
  }
}

module.exports = new Cart();
