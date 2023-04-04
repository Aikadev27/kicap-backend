const UserModel = require("../models/User.model");
const { decode } = require("../utils/jwt.util");

/**
 *
 *
 * @param {import('express').Request} req
 * @param {*} res
 * @param {*} next
 */
async function adminRole(req, res, next) {
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
    const role = dataUser.role;

    if (!user || role != "admin") {
      return res.status(402).send({
        success: false,
        message: "khong tim thay user",
        message2: "ban khong co quyen admin",
      });
    }
    req.user = user.toObject();
    next();
    console.log(dataUser);
  } catch (error) {
    console.log(error);
  }
}

async function userRole(req, res, next) {
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
    const role = dataUser.role;

    if (!user || role != "user") {
      return res.status(402).send({
        success: false,
        message: "khong tim thay user",
        message2: "ban khong phai user",
      });
    }
    req.user = user.toObject();
    next();
    console.log(dataUser);
  } catch (error) {
    console.log(error);
  }
}
module.exports = { adminRole, userRole };
