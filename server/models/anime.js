const { Schema } = require("mongoose");

const Anime = new Schema(
  {
    image: { type: String },
    name: { type: String, required: true },
    genre: {type: String},
    console: { type: Number}
  },
  { timestamps: true }
);

module.exports = Anime;
