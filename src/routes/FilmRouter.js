const filmController = require("../app/controllers/FilmController");
const Router = require("express").Router();
Router.post("/", filmController.addFilmController);
module.exports = Router;
