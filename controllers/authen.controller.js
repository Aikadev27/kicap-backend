const User = require("../models/User.model");
const argon2 = require("argon2");
// const jwt = require("jsonwebtoken");
const { encode } = require("../utils/jwt.util");
const UserModel = require("../models/User.model");
const CartModel = require("../models/Cart.model");
class UserController {
  // chuc nang tao tai khoan
  async register(req, res) {
    try {
      const pass = req.body.pass;
      const hash = await argon2.hash(pass);
      const user = await User.create({ ...req.body, pass: hash });
      await CartModel.create({ userId: user._id, products: [] });
      const token = encode(user.toObject());
      res.send({ token });
    } catch (error) {
      console.log(error);
      res.status(400).send("dang ky khong thanh cong");
    }
  }
  async getUserById(req, res) {
    const query = req.params._id;
    await UserModel.findById(query)
      .then((result) => res.send(result))
      .catch((error) => {
        console.log(error);
      });
  }
  async auth(req, res) {
    try {
      res.send(req.user);
    } catch (error) {
      res.status(402).send("unknow user");
    }
  }
  // dang nhapp
  async login(req, res) {
    try {
      const userName = req.body.userName;
      const pass = req.body.pass;
      const user = await User.findOne({ userName });
      if (!user) {
        return res.status(401).send("khong tim thay user");
        // res.redirect("/singup");
      }
      if (!(await argon2.verify(user.pass, pass))) {
        return res.status(401).send("khong tim thay pass");
      }
      res.send({
        token: encode(user.toObject()),
        user,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async updateUser(req, res) {
    const userId = req.user._id;
    try {
      const user = await User.findByIdAndUpdate(userId, req.body, {
        new: true,
      });

      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
}

module.exports = new UserController();
