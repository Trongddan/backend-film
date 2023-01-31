const mongoose = require("mongoose");
const Database = {
  connect: () => {
    mongoose.connect("mongodb://localhost:27017/shopAcc", () => {
      console.log("connect successfully");
    });
  },
};
module.exports = Database;
