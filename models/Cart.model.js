const { Schema, model } = require("mongoose");
// const ProductModel = require("./Product.model");
const Cart = new Schema({
  //   _id: { type: ObjectId },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "Product", require: true },
      quantity: { type: Number, min: 0 },
    },
  ],
  totalPrice: {
    type: Number,
    default: 0,
  },
});

module.exports = model("Cart", Cart, "cart");
