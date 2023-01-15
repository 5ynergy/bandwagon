//Routes for genre
const router = require("express").Router();
const { Genre, User } = require("../models");

//Search by genre function - GET all genres
router.get("/genres", async (req, res) => {
  try {
    const dbGenreData = await Genre.findAll({
      include: [{ model: User }],
    });
    //This is for insomnia test:
    // res.status(200).json(dbGenreData);
    res.render("pages/genres")
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET individual genre and show all associated artists
//     //include User (name)
router.get("/genres/:id", async (req, res) => {
  try {
    const dbGenreData = await Genre.findByPk(req.params.id, {
      include: [{ model: User }],
    });
    //This is for insomnia test:
    res.status(200).json(dbGenreData);
    //TODO: Insert render code for handlebars:
    //
    //
    //
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
