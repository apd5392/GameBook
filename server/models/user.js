const { Schema } = require("mongoose");

const User = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: [{type: String }],
    userName: {type: String },
    email: {type: String },
    password: {type: String}
  },
  { timestamps: true }
);

module.exports = User;
