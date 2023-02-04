const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authController = {
  // generate accesstoken
  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        admin: user.admin,
      },
      "dankenvil",
      { expiresIn: "30d" }
    );
  },

  //generate refreshToken:
  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        admin: user.admin,
      },
      "dankenvil",
      { expiresIn: "30d" }
    );
  },
  //dang ki
  register: async (req, res) => {
    try {
      // hased password
      const salt = await bcrypt.genSalt(10);
      const hased = await bcrypt.hash(req.body.password, salt);
      //create user
      const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hased,
      });
      const userSaved = await newUser.save();
      res.status(200).json(userSaved);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //dang nhap
  login: async (req, res) => {
    console.log(12);
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        res.status(500).json({mess:"tài khoản không tồn tại"});
      }
      const validatePassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validatePassword) {
        res.status(404).json({mess:"Mật khẩu không chính xác"});
      }
      if (user && validatePassword) {
        const accessToken = authController.generateAccessToken(user);
        const refreshToken = authController.generateRefreshToken(user);
        res.cookie("refeshToken", refreshToken, {
          httpOnly: true,
          path: "/",
          secure: false,
          sameSite: "strict",
        });
        const { password, ...other } = user._doc;
        res.status(200).json({ ...other, accessToken, refreshToken });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // lay tat ca user
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = authController;
