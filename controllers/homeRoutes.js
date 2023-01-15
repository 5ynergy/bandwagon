const router = require("express").Router();
const { User, Event, Genre } = require("../models");

//GET the homepage to render including events today
router.get("/", async (req, res) => {
  try {
    const HomeData = await Event.findAll({
      //!!!! NEED TO FIGURE OUT HOW TO FILTER BY DATE
      include: [{ model: User, attributes: ['name'] }],
    });
    // res.status(200).json(dbEventData);

    //Handlebars:
    const events = HomeData.map((event) => event.get({ plain: true }));
    res.render("pages/homepage", { events });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET route for rendering login page
router.get("/login", (req, res) => {
  res.render("pages/login");
});

//GET route for rendering sign up page
router.get("/signup", (req, res) => {
  res.render("pages/signup");
});

//Login/logout/signup POST routes - these will be found in User Routes

module.exports = router;
