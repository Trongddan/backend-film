const Router = require("express").Router();
const countryController = require("../app/controllers/countryController");
//all a country
Router.post("/", countryController.addCountry);
// get all country
Router.get("/",countryController.getAllCountry);
module.exports = Router;
