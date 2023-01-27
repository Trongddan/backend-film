const UserRouter = require("./UserRoute");
const route = (app) => {
  app.use("/auth", UserRouter);
};
module.exports = route;
