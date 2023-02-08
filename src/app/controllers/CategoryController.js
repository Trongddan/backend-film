const Category = require("../models/Category");
const CategoryController = {
  //add category:
  addCategory: async (req, res) => {
    try {
      const newCategory = await new Category(req.body);
      newCategory.name = newCategory.name.toLowerCase();
      const savedCategory = await newCategory.save();
      res.status(200).json(savedCategory);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //get all category:
  getAllCategory: async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //get film by cate
  getAllFilmByCateName: async (req, res) => {
    console.log(req.query.cate);
    try {
      const films = await Category.findOne({ ext: req.query.cate }).populate(
        "films"
      );
      res.status(200).json(films.films);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = CategoryController;
