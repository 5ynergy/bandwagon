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

    res.render("pages/genres", { genres, loggedIn: req.session.logged_in });
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
    const artistData = await User.findAll( { where: {genre_id: req.params.id}, include:[{ model: Genre}]
    });
   
    // res.status(200).json(dbGenreData);
    const artists = artistData.map((artist) => artist.get({ plain: true }));
    // const displaygenre = genreData.get({plain: true})
    res.render("pages/genredetails", { artists, loggedIn: req.session.logged_in  });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
