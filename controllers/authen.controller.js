const User = require("../models/User.model");
const argon2 = require("argon2");
// const jwt = require("jsonwebtoken");
const { encode } = require("../utils/jwt.util");

class UserController {
  // chuc nang tao tai khoan
  async register(req, res) {
    try {
      const pass = req.body.pass;
      const hash = await argon2.hash(pass);
      const user = await User.create({ ...req.body, pass: hash });
      const token = encode(user.toObject());
      res.send({ token });
    } catch (error) {
      console.log(error);
      res.status(400).send("dang ky khong thanh cong");
    }
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
}

module.exports = new UserController();
