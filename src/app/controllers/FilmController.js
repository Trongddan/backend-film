const Film = require("../models/Film");
const path = require("path");
const Category = require("../models/Category");
const Country = require("../models/Country");
const cloudinary = require("../middlewares/cloudinary");
const filmController = {
  //add a film controller
  addFilmController: async (req, res) => {
    try {
      const Listcategory = req.body.categories.split(",");
      const Listactor = req.body.actors.split(",");
      // console.log(category);
      const newFilm = await new Film({
        name: req.body.name,
        time:  req.body.time,
        numberOfEpisodes:  req.body.numberOfEpisodes,
        poster: null,
        country:  req.body.country,
        produceYear:  req.body.produceYear,
        language:  req.body.language,
        url: null,
        actors: Listactor,
        authors:  req.body.authors,
        categories: Listcategory,
      });
      await cloudinary.uploader.upload(
        req.files.url[0].path,
        {
          resource_type: "video",
          folder: "Phimhay",
          public_id: path.basename(req.files.url[0].path),
        },
        (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).send(err);
          }
          newFilm.url = result.url;
        }
      );

      await cloudinary.uploader.upload(
        req.files.poster[0].path,
        {
          resource_type: "image",
          folder: "Poster",
          public_id: path.basename(req.files.poster[0].path),
        },
        (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).send(err);
          }

          newFilm.poster = result.url;
        }
      );
      console.log(newFilm);
      const saveFilm = await newFilm.save();
      if (req.body.categories) {
       newFilm.categories.map(async (categoryId) => {
          const category = Category.findById(categoryId);
          await category.updateOne({ $push: { films: saveFilm._id } });
        });
      }
      if (req.body.country) {
        const country = Country.findById(req.body.country);
        await country.updateOne({ $push: { films: saveFilm._id } });
      }
      res.status(200).json("Thêm mới phim thành công");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // get film by Theme
  getFilmsByTheme: async (req, res) => {
    try {
      const films = await Film.find().populate("categories");
      res.status(200).json(films.name);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // get detail a film 
  getDetailAfilm: async (req, res) => {
    try {
      const films = await Film.findOne({_id:req.params.id}).populate("categories").populate("country");
      res.status(200).json(films);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = filmController;
