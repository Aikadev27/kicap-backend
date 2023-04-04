const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");
const Product = new Schema({
  name: { type: String },
  sku: { type: String },
  brand: { type: String },
  price: { type: Number },
  image: { type: String },
  slug: { type: String, slug: "sku", unique: true },
  description: {
    type: String,
  },
  categoryId: { type: ObjectId, ref: "Category" },
});

module.exports = model("Product", Product, "product");
