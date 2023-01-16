//Routes for artist data
const router = require("express").Router();
const { Event, User, Genre } = require("../models");
//POST artist route is in homeRoutes because you input artist data when you sign up >>>>>

//GET artist by ID (listener view) 
//Note to self: artist ID is by the hundreds (eg. 101,102)
router.get("/artist/:id", async (req, res) => {
  try {
    const dbArtistData = await User.findByPk(req.params.id, {
      include: [{ model: Event }, {model: Genre}],
    });
    if (!dbArtistData) {
      res.render("pages/404");
    }
    res.status(200).json(dbArtistData);
    //Add rendering to handlebars code below
    //
    //
  } catch (err) {
    res.status(500).json(err);
  }
});

  module.exports = router;