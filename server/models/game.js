const { Schema } = require("mongoose");

const Game = new Schema(
  {
    image: { type: String },
    name: { type: String, required: true },
    genre: [{type: String}],
    console: { type: String },
  },
  { timestamps: true }
);

module.exports = Game;
