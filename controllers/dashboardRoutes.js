const router = require("express").Router();
const { Event, User } = require("../models");
const withAuth = require('../utils/auth');

//GET event data ONLY belonging to the logged-in User
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    //find the user who matches the
    const dashboardData = await Event.findAll({
      where: { artist_id: req.session.user_id },
      include: [{ model: User }]
    });
    // This is for test
    // res.status(200).json(dashboardData);

    // const dashboardEvents = dashboardData.map((event) => event.get({plain: true}))
    res.render("pages/dashboard")

  } catch (err) {
    res.status(500).json(err);
    res.render("pages/accessDenied");
  }
});

//POST new event event (must be logged in, current user id must match profile owner id) withauth
router.post("/dashboard", async (req, res) => {
  try {
    const { event_name, date, address, content, event_image, user_id } =
      req.body;
        const artist_id = 103//req.session.user_id 
        //(change 103 -> req.session.user_id after handlebars to test)
    const newEvent = await Event.create({
      event_name,
      date,
      address,
      content,
      artist_id,
      event_image,
      user_id,
    });
    res.status(200).json(newEvent);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
