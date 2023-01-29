const Category = require("../models/Category");
const CategoryController = {
  //add category:
  addCategory: async (req, res) => {
    try {
      const newCategory = await new Category(req.body);
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
};
module.exports = CategoryController;
