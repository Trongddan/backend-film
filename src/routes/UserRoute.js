const router = require("express").Router();
const authController = require("../app/controllers/authController");
const middleware = require("../app/middlewares/middleware");
//dang ky
router.post("/register", authController.register);
router.post("/login", authController.login);
// router.get("/all", middleware.verifyToken, authController.getAllUsers);
module.exports = router;
