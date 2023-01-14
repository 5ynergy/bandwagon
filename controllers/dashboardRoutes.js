const router = require("express").Router();
const { Event, User } = require("../models");

//GET event data ONLY belonging to the logged-in User
//!!!!!Need to figure out how to set the artist_id to the id of the User that is currently logged in
//const artist_id =
router.get("/dashboard/:id", async (req, res) => {
  try {
    const dashboardData = await User.findByPk(req.params.id, {
      include: [{ model: Event }],
    });
    // This is for insomnia test
    res.status(200).json(dashboardData);
    //Add rendering to handlebars code below
    //
    //
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST new event event (must be logged in, current user id must match profile owner id) withauth
router.post("/dashboard/:id", async (req, res) => {
  try {
    const { event_name, date, content, artist_id, event_image, user_id } =
      req.body;
    //!!!!!Need to figure out how to set the artist_id to the id of the User that is currently logged in
    //const artist_id =
    const newEvent = await Event.create({
      event_name,
      date,
      content,
      //artist_id (add artist id back once figure out how to set it as the id of the User taht is currently logged in)
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
