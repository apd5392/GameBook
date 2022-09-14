const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("HomePage"));

//Get Routes
router.get("/heroes", controllers.getAllGames);
router.get("/villains", controllers.getAllReviews);

//Search
router.get('/heroes/:id', controllers.getHeroId)

//Post Routes
router.post("/heroes", controllers.createGame);

//Update Routes
router.put('/heroes/:id', controllers.updateHero)


//Delete Routes
router.delete("/heroes/:id", controllers.deleteHero);



// router.get("/", controllers.getObjects); //quick away to access getObjects from controller folder

// router.get("/objects/:id", controllers.getObjectById);

// router.post("/objects", controllers.createObject);

// router.put("/objects/:id", controllers.updateObject);

// router.get('/', (req, res) => res.send('This is root!'))

module.exports = router;
