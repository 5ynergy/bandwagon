const router = require("express").Router();
const { Event, User, Genre } = require("../models");
const connection = require("../server");
const withAuth = require("../utils/auth");

//GET ROUTE for artist profile with login
router.get("/profile", withAuth, async (req, res) => {
  try {
    const profileData = await User.findOne({
      where: { id: req.session.user_id },
      include: [{ model: Genre, attributes: ["name"] }],
    });
    const artist = await profileData.get({ plain: true });
    // res.status(200).json(profileData);
    res.render("pages/profile", { artist,loggedIn: req.session.logged_in }, );
  } catch (err) {
    res.status(500).json(err);
  }
});

//PUT route to input information (not a POST route because the User object already has been created during signup)
// router.put('/profile', withAuth, async (req, res) => {
//     try{
//         const
//     } catch err
// })

//Listener View for artist profile:
router.get("/artist/:id", async (req, res) => {
  try {
    const profileData = await User.findByPk(req.params.id, {
      include: [{ model: Genre, attributes: ["name"] }],
    });
    const artist = await profileData.get({ plain: true });
    res.render("pages/profile", { artist });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
