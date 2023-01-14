const router = require("express").Router();
const { Event, User, Genre } = require("../models");
const connection = require("../server");

//GET ROUTE for artist profile only if logged in
//??? Is it possible to push current User id into the :/ id field in the request?
router.get("/profile/:id", async (req, res) => {
  try {
    const profileData = await User.findByPk(req.params.id, {
      include: [{ model: Genre }],
    });
    //      !!!!! Pseudocode only. Need to figure out hard code !!!!!!
    //if (loggedInUserEmail !== profileData.email) {
    //res.render('404');
    //      }
    res.status(200).json(profileData);
    //add code to render to handlebars profile view

  } catch (err) {
    res.status(500).json(err);
  }
});

//Prevent non-logged-in users from viewing Artist Profile /profile

//PUT route to input information (not a POST route because the User object already has been created during signup)

module.exports = router;
