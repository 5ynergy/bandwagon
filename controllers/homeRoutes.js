const router = require("express").Router();
const { User, Event, Genre } = require("../models");

//GET the homepage to render including events within cetain date
router.get("/", async (req, res) => {
    try {
        const dbEventData = await Event.findAll({
          //!!!! NEED TO FIGURE OUT HOW TO FILTER BY DATE
          include: [{ model: User }],
        });
        res.status(200).json(dbEventData);
    //Insert handlebars code
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});


//Login and logout are in userRoutes in api
    //Login route to redirect to profile /profile (so that new artist can edit details) -->
    //If a session exists, redirect the request to the homepage

    //Logout route

    //Signup route --> modal pops up where you enter artist data
    //POST artist data by signing up

module.exports = router;
