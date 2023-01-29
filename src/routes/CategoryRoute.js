const Router = require("express").Router();
const CategoryController = require("../app/controllers/CategoryController");
Router.post("/", CategoryController.addCategory);
Router.get("/", CategoryController.getAllCategory);
module.exports = Router;
