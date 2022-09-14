const { model } = require("mongoose");
const AnimeSchema = require("./anime");
const GameSchema = require("./game");
const ReviewSchema = require("./review");
const UserSchema = require("./user");

const Anime = model("Anime", AnimeSchema);
const Game = model("Game", GameSchema);
const Review = model("Review", ReviewSchema);
const User = model("User", UserSchema);

module.exports = {
  Anime,
  Game,
  Review,
  User,
};
