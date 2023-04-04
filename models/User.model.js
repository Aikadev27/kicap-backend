const { Schema, model } = require("mongoose");

const User = new Schema(
  {
    fullName: { type: String },
    userName: { type: String, max: 20, unique: true, required: true },
    pass: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, unique: true },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", User, "user");
