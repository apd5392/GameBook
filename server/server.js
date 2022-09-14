const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const routes = require('../server/routes');
const PORT = process.env.PORT || 3001;
const db = require("./db");
const { Game, Review, Organization, Anime } = require("./models");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.use("/", routes)


// app.get("/", (req, res) => {
//   res.send("Server set up");
// });

// app.get("/heroes", async (req, res) => {
//   const heroes = await Hero.find({});
//   res.json(heroes);
// });

// app.get('/heroes/:id', async (req, res) => {
//   try {
//     const { id } = req.params
//     const hero = await Hero.findById(id)
//     if (!hero) throw Error('Hero not found')
//     res.json(hero)
//   } catch (e) {
//     console.log(e)
//     res.send('Hero not found!')
//   }
// })

// app.get("/villains", async (req, res) => {
//   const villains = await Villain.find({});
//   res.json(villains);
// });
// app.get("/organizations", async (req, res) => {
//   const heroes = await Organization.find({});
//   res.json(heroes);
// });
// app.get("/animes", async (req, res) => {
//   const heroes = await Anime.find({});
//   res.json(heroes);
// });

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
