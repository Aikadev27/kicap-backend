const ProductModel = require("../models/Product.model");

class Product {
  // GET: hien thi tất cả sản phẩm và loại của sp
  async displayProduct(req, res) {
    await ProductModel.find()
      .populate("categoryId", " -_id")
      .then((result) => {
        // res.send("hello");
        res.send(result);
      })
      .catch((err) => console.log(err));
  }
  //   POST: them san pham moi
  async addProduct(req, res) {
    await ProductModel.create(req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => console.log(err));
  }
  //   DELETE: xoa san pham
  async delete(req, res) {
    const query = req.params._id;
    await ProductModel.findById(query)
      .deleteOne()
      .then((result) => {
        res.send(result);
      })
      .catch((error) => console.log(error));
  }
  //   DELETE: xoa tat ca san pham
  async deleteAll(req, res) {
    const product = await ProductModel.findOne(req.body.sku);
    if (!product) {
      res.send("khong tim thay san pham");
    }

    await ProductModel.deleteMany()
      .then((result) => {
        res.send(result);
      })
      .catch((error) => console.log(error));
  }
  //   POST: update thong tin san pham
  async update(req, res) {
    try {
      const id = req.params._id;
      const update = req.body;
      await ProductModel.findByIdAndUpdate(id, update).then((result) => {
        res.send(result);
      });
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = new Product();
