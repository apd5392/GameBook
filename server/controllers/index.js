const { Game, Review, User } = require("../models");

// Show Data, Get Databse

const getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    return res.status(200).json({ games });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json({ reviews });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};



//Create a new objects

const createGame = async (req, res) => {
  try {
    const game = await new Game(req.body);
    await game.save();
    return res.status(201).json({
      game,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const createUser = async (req, res) => {
  try {
    const user = await new Game(req.body);
    await user.save();
    return res.status(201).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
// Search ID

const getHeroId = async (req, res) => {
  try {
    const { id } = req.params;
    const hero = await Hero.findById(id);
    if (hero) {
      return res.status(200).json({ hero });
    }
    return res.status(404).send("Hero with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Update an objects

const updateHero = async (req, res) => {
  try {
    const game = req.body;
    console.log(req.body);
    const rest = await Game.findByIdAndUpdate(req.params.id, game);
    if (game) {
      return res.send({ msg: `Game Updated` });
    }
    if (!rest) {
      res.status(500).send("Game not found");
    }
    return res.status(200).json(rest);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = req.body;
    console.log(req.body);
    const rest = await User.findByIdAndUpdate(req.params.id, user);
    if (user) {
      return res.send({ msg: `User Updated` });
    }
    if (!rest) {
      res.status(500).send("User not found");
    }
    return res.status(200).json(rest);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteHero = async (req, res) => {
  try {
    const deleted = await Game.findByIdAndDelete(req.params.id);
    if (deleted) {
      return res.send({ msg: `Game deleted` });
    }
    throw new Error("Game not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createGame,
  createUser,
  updateUser,
  getAllGames,
  getAllReviews,
  getAllUsers,
  getHeroId,
  updateHero,
  deleteHero,
};
