const { Schema } = require("mongoose");

const Review = new Schema(
  {
    name: { type: String, required: true },
    userName: [{ type: String }],
    review: [{type: String}],
  },
  { timestamps: true }
);

module.exports = Review;