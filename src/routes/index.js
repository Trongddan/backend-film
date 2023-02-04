const UserRouter = require("./UserRoute");
const CategoryRouter = require("./CategoryRoute");
const CountryRouter = require("./CountryRouter");
const FilmRouter = require("./FilmRouter");

const route = (app) => {
  app.use("/auth", UserRouter);
  app.use("/the-loai", CategoryRouter);
  app.use("/quoc-gia", CountryRouter);
  app.use("/phim", FilmRouter);

};
module.exports = route;
