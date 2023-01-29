const UserRouter = require("./UserRoute");
const CategoryRouter = require("./CategoryRoute");
const route = (app) => {
  app.use("/auth", UserRouter);
  app.use("/the-loai", CategoryRouter);
};
module.exports = route;
