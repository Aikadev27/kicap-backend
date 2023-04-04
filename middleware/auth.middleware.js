const UserModel = require("../models/User.model");
const { decode } = require("../utils/jwt.util");

/**
 *
 *
 * @param {import('express').Request} req
 * @param {*} res
 * @param {*} next
 */
module.exports = async function auth(req, res, next) {
  const token =
    req.header("authorization") && req.header("authorization")?.split(" ")[1];

  if (!token) {
    return res.status(402).send({
      success: false,
      message: "token khong hop le ",
    });
  }
  try {
    const dataUser = decode(token);
    const user = await UserModel.findById(dataUser._id);
    if (!user) {
      return res.status(402).send({
        success: false,
        message: "khong tim thay user",
      });
    }
    req.user = user.toObject();
    next();
    console.log(dataUser);
  } catch (error) {
    console.log(error);
  }
};
