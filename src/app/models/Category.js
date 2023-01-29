const mongoose = require("mongoose");
const CategorySchema = mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
  },
  { timeStamps: true }
);
module.exports = mongoose.model("category", CategorySchema);
