const router = require("express").Router();
const { User, Event, Genre } = require("../models");
const { Op } = require("sequelize");

//GET the homepage to render including events today
router.get("/", async (req, res) => {
  try {
    //GET events ONLY whose date/time are between the start(00:00:00) and end (23:59:59) of today
    let todayStart = new Date();
    todayStart.setUTCHours(0, 0, 0, 0);
    let todayEnd = new Date();
    todayEnd.setUTCHours(23, 59, 59, 0);
    console.log(todayStart);
    console.log(todayEnd);
    const HomeData = await Event.findAll({
      where: { date: { [Op.gt]: todayStart, [Op.lt]: todayEnd } },
      include: [{ model: User, attributes: ["name"] }],
    });

    console.log(req.session.logged_in);
    // res.status(200).json(dbEventData);
    //Handlebars:
    const events = HomeData.map((event) => event.get({ plain: true }));
    res.render("pages/homepage", { events, loggedIn: req.session.logged_in });
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err);
  }
});

//GET route for rendering login page
router.get("/login", (req, res) => {
  res.render("pages/login");
});

//GET route for rendering sign up page
router.get("/signup", (req, res) => {
  res.render("pages/signup", {jsFile: "signup.js"});
});

//Login/logout/signup POST routes - these will be found in User Routes

module.exports = router;
