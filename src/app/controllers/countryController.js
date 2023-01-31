const Country = require("../models/Country");
const countryController = {
  // add a country
  addCountry: async (req, res) => {
    try {
      const newContry = await new Country(req.body);
      const savedCountry = await newContry.save();
      res.status(200).json(savedCountry);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // get all country
  getAllCountry: async (req, res) => {
    try {
      const allCountry = await Country.find();
      res.status(200).json(allCountry);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = countryController;
