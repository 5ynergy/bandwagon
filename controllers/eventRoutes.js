const router = require("express").Router();
const { Event, User } = require("../models");
const { Op } = require("sequelize");

// GET all events ('/events') to render on events page
router.get("/events", async (req, res) => {
  //Only shows events that are happening today and onwards. Does not show past events.
  try {
    let today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    const allEvents = await Event.findAll({
      where: { date: { [Op.gt]: today } },
      include: [{ model: User, attributes: ["name"] }],
    });
    // res.status(200).json(dbEventData); for testing

    //Handlebars:
    const events = allEvents.map((event) => event.get({ plain: true }));
    res.render("pages/events", { events });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET individual event
router.get("/events/:id", async (req, res) => {
  try {
    const dbEventData = await Event.findByPk(req.params.id, {
      include: [{ model: User }],
    });
    if (!dbEventData) {
      res.render("pages/404");
    }
    // res.status(200).json(dbEventData);

    //Handlebars:
    res.render("pages/eventdetails");
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST event is located in dashboardRoutes since you can only access it when logged in as artist. >>>

module.exports = router;
