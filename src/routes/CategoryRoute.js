const Router = require("express").Router();
const CategoryController = require("../app/controllers/CategoryController");
Router.post("/", CategoryController.addCategory);
Router.get("/", CategoryController.getAllCategory);
Router.get("/films", CategoryController.getAllFilmByCateName);
module.exports = Router;
