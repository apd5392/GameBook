const { model } = require("mongoose");
const AnimeSchema = require("./anime");
const GameSchema = require("./game");
const ReviewSchema = require("./review");
const OrganizationSchema = require("./organization");

const Anime = model("Anime", AnimeSchema);
const Game = model("Game", GameSchema);
const Review = model("Review", ReviewSchema);
const Organization = model("Organization", OrganizationSchema);

module.exports = {
  Anime,
  Game,
  Review,
  Organization,
};
