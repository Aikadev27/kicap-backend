const { Schema, model } = require("mongoose");

const Category = new Schema({
  type: { type: String },
  description: { type: String },
  slug: { type: String, slug: "type", unique: true },
});

module.exports = model("Category", Category, "category");
