const mongoose = require("mongoose");
const filmSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    authors: { type: String, required: true },
    time: { type: String, required: true },
    numberOfEpisodes: { type: Number, required: true },
    actors: [{ type: String }],
    poster: { type: String },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required:true
      },
    ],
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "country",
      required:true
    },
    produceYear: { type: Number, required: true },
    language: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("film", filmSchema);
