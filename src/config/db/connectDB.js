const mongoose = require("mongoose");
const Database = {
  connect: () => {
    mongoose.connect("mongodb+srv://doantrongdan:Trongdan123@phimhay.bvl4o6j.mongodb.net/?retryWrites=true&w=majority", () => {
      console.log("connect successfully");
    });
  },
};
module.exports = Database;
