//Routes for genre
const router = require("express").Router();
const { Genre, User } = require("../models");

//Search by genre function - GET all genres
router.get("/genres", async (req, res) => {
  try {
    const dbGenreData = await Genre.findAll({
      include: [{ model: User }],
    });
    const genres = dbGenreData.map((genre) => genre.get({ plain: true }));

    res.render("pages/genres", {genres, loggedIn: req.session.logged_in});
    //This is for insomnia test:
    // res.status(200).json(dbGenreData);
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
    // res.status(200).json(dbGenreData);
    const genres = dbGenreData.map((genre) => genre.get({ plain: true }));
res.render("")
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
