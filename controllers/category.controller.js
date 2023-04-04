const Category = require("../models/Category.model.js");
// const argon2 = require("argon2");

class CategoryController {
  // method GET: display category
  display(req, res) {
    Category.find()

      .then((result) => {
        res.send(result);
      })
      .catch((error) => console.log(error));
  }
  // method GET: find category by name - query
  findType(req, res) {
    const query = req.params.query;
    Category.find({ name: query })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // method GET: sort data A-Z by name
  sortAtoZ(req, res) {
    const sortCondditions = { name: 1 };
    Category.find()
      .sort(sortCondditions)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => console.log(err));
  }
  // method GET: sort data Z-A by name
  sortZtoA(req, res) {
    const sortCondditions = { name: -1 };
    Category.find()
      .sort(sortCondditions)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => console.log(err));
  }
  //   method POST: create new category
  async createCategory(req, res) {
    try {
      const category = await Category.create(req.body);
      res.send(category);
    } catch (error) {
      console.log(error);
    }
  }
  // method DELETE : delete data by ID
  async delete(req, res) {
    const query = req.params._id;
    await Category.findById(query)
      .deleteOne()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => console.log(err));
  }
  // update category
  async update(req, res) {
    try {
      const id = req.params._id;
      const update = req.body;
      await Category.findByIdAndUpdate(id, update).then((result) => {
        res.send(result);
      });
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = new CategoryController();
