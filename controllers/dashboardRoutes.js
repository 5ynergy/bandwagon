const router = require("express").Router();
const { Event, User } = require("../models");
const withAuth = require('../utils/auth');

//GET event data ONLY belonging to the logged-in User
router.get("/dashboard", withAuth, 
async (req, res) => {
  try {
    //find the user whose id matches the user_id for current logged in user
    const dashboardData = await Event.findAll({
      where: { artist_id: req.session.user_id 
    //   (commented out for handlebars testing) 
},
      include: [{ model: User, attributes: ['name'] }]
    });
    // This is for test
    // res.status(200).json(dashboardData);

    const events= dashboardData.map((event) => event.get({plain: true}))
    res.render("pages/dashboard", {events, loggedIn: req.session.logged_in})

  } catch (err) {
    res.status(500).json(err);
  }
});

//POST new event event (must be logged in)
router.post("/dashboard", async (req, res) => {
  try {
    const { event_name, date, address, content, event_image, user_id } =
      req.body;
        const artist_id = req.session.user_id 
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
