const router = require("express").Router();
const { Event, User } = require("../models");
const connection = require("../server");
//GET ROUTE for artist profile
// GET the profile page to render - user must be logged in
//GET Artist data where id = logged in user's id
router.get("/profile", async (req, res) => {
  const Users = await User.findByPk(req.params.id, {include: [{ model: Genre}],
});
//if current logged in user id = req.params.id,  render page
  res.render("pages/profile", {
  })
//else res.render("404");
});

//Prevent non-logged-in users from viewing Artist Profile /profile



//PUT route to input information (not a POST route because the User object already has been created during signup)

module.exports = router;
