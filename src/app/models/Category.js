const mongoose = require("mongoose");
const CategorySchema = mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
    ext: { type: String },
    films: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "film",
      },
    ],
  },
  { timeStamps: true }
);
module.exports = mongoose.model("category", CategorySchema);
