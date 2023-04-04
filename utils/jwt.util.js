const jwt = require("jsonwebtoken");
const privateKey = "mysecrecttoken";
function decode(token) {
  try {
    return jwt.verify(token, privateKey);
  } catch (error) {
    return {};
  }
}

function encode(data) {
  try {
    return jwt.sign(data, privateKey);
  } catch (error) {
    console.log(error);
    return "";
  }
}

module.exports = { decode, encode };
