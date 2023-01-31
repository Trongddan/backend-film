const Film = require("../models/Film");
const Category = require("../models/Category");
const Country = require("../models/Country");
const filmController = {
  //add a film controller
  addFilmController: async (req, res) => {
    try {
      const newFilm = await new Film(req.body);
      const saveFilm = await newFilm.save();
      if (req.body.categories) {
        req.body.categories.map(async (categoryId) => {
          const category = Category.findById(categoryId);
          await category.updateOne({ $push: { films: saveFilm._id } });
        });
      }
      if (req.body.country) {
        const country = Country.findById(req.body.country);
        country.updateOne({ $push: { films: saveFilm._id } });
      }
      res.status(200).json("Thêm mới phim thành công");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = filmController;
