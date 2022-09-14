const { Schema } = require("mongoose");

const Organization = new Schema(
  {
    name: { type: String, required: true },
    leader: [{type: String }],
    members: {type: String },
    enemies: {type: String }
  },
  { timestamps: true }
);

module.exports = Organization;
