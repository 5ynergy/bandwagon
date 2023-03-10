const router = require("express").Router();
const { Event, User } = require("../models");
const { Op } = require("sequelize");

// GET all events ('/events') to render on events page
router.get("/events", async (req, res) => {
  //Only shows events that are happening today and onwards. Does not show past events.
  try {
    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const d = new Date();
    const today = `${d.getFullYear()}-${months[d.getMonth()]}-${d.getDate()}`
    const allEvents = await Event.findAll({
      where: { date: { [Op.gte]: today } },
      include: [{ model: User, attributes: ["name"] }],
    });
    // res.status(200).json(dbEventData); for testing

    //Handlebars:
    const events = allEvents.map((event) => event.get({ plain: true }));
    res.render("pages/events", {events, loggedIn: req.session.logged_in});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET individual event
router.get("/events/:id", async (req, res) => {
  try {
    const dbEventData = await Event.findByPk(req.params.id, {
      include: [{ model: User, attributes: ["id","name","socials"] }],
    });
    const event = dbEventData.get({plain: true})
    if (!dbEventData) {
      res.render("pages/404");
    }
    // res.status(200).json(dbEventData);

    //Handlebars:
    res.render("pages/eventdetails", {event});
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST event is located in dashboardRoutes since you can only access it when logged in as artist. >>>

module.exports = router;
