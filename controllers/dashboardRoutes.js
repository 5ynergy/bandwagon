const router = require("express").Router();
const { Event, User } = require("../models");
const withAuth = require("../utils/auth");
const uploadImage = require("../cloudinary_upload/uploadimage")

//GET event data ONLY belonging to the logged-in User
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    //find the user whose id matches the user_id for current logged in user
    const dashboardData = await Event.findAll({
      where: {
        artist_id: req.session.user_id,
      },
      include: [{ model: User, attributes: ["name"] }],
    });
    // res.status(200).json(dashboardData);
    const events = dashboardData.map((event) => event.get({ plain: true }));
    res.render("pages/dashboard", { events, loggedIn: req.session.logged_in, jsFile: "createEvent.js", artist_id: req.session.user_id });
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST new event event (must be logged in)
router.post("/dashboard", async (req, res) => {
  try {
    const { event_name, date, time, address, content, event_image} =
      req.body;
    const artist_id = req.session.user_id;
    const image = uploadImage(event_image)
    .then(async (url) => {
      const newEvent = await Event.create({
        event_name,
        date,
        time,
        address,
        content,
        artist_id,
        event_image: url.secure_url,
      });
     res.redirect("/events");
    }).catch((error) => console.log(error));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
