const db = require("../db");
const { User } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const users = [
    {
      firstName: "Jane",
      lastName: "Doe",
      userName: "Leedle",
      email: "test@test.com",
      passowrd: "123abc",
    },
  ];
  await User.deleteMany();
  await User.insertMany(users);
  console.log("User List:", users);
};

const run = async () => {
  await main();
  db.close();
};

run();
