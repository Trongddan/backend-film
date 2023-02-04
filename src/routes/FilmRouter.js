const filmController = require("../app/controllers/FilmController");
const upload = require("../app/middlewares/upload");
const Router = require("express").Router();
Router.post(
  "/",
  upload.fields([
    { name: "poster", maxCount: 1 },
    { name: "url", maxCount: 1 },
  ]),
  filmController.addFilmController
);
Router.get("/:id", filmController.getDetailAfilm);
module.exports = Router;
