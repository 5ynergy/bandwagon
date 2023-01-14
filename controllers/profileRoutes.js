const router = require("express").Router();
const { Event, User } = require("../models");
const connection = require("../server");

//GET ROUTE for artist profile only if logged in
//??? Is it possible to push current User id into the :/ id field in the request?
router.get("/profile/:id", async (req, res) => {
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
