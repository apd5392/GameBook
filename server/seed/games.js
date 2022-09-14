const db = require("../db");
const { Game } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const games = [
    {
      image: "https://i.imgur.com/8CY9ejk.jpg",
      name: "League of Legends",
      genre: [
        "Moba",
      ],
      console: "Pc",
    },
    {
      image: "https://i.imgur.com/bIoGQua.jpg",
      name: "Halo Reach",
      genre: [
        "First-person shooter",
      ],
      console: "Xbox 360",
    },
    {
      image: "https://i.imgur.com/Gd5A2aM.png",
      name: "Halo 3",
      genre: [
        "First-person shooter"
      ],
      console: "Xbox 360",
    },
    {
      image: "https://i.imgur.com/5qdGghW.jpg",
      name: "Uncharted 4",
      genre: [
        "Action-adventure",
      ],
      console: "PS4",
    },
    {
      image: "https://i.imgur.com/7W1PKya.png",
      name: "Halo 5",
      genre: [
        "First-person shooter",
      ],
      console: "Xbox One",
    },
    {
      image: "https://i.imgur.com/39vHdBY.jpg",
      name: "Madden 23",
      genre: [
        "Sports",
      ],
      console: "Xbox One",
    },
    {
      image: "https://i.imgur.com/UOKlU2y.jpg",
      name: "Nba 2k23",
      genre: [
        "Sports",
      ],
      console: "PS5",
    },
    {
      image: "https://i.imgur.com/cq6yfc7.jpg",
      name: "WWE 2k22",
      genre: [
        "Sport",
      ],
      console: "PC",
    },
    
    
  ];
  await Game.deleteMany();
  await Game.insertMany(games);
  console.log("Game List:", games);
};

const run = async () => {
  await main();
  db.close();
};

run();
