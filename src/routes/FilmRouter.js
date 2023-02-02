const filmController = require("../app/controllers/FilmController");
const upload = require("../app/middlewares/upload");
const Router = require("express").Router();
Router.post("/", upload.single("poster"), filmController.addFilmController);

module.exports = Router;
