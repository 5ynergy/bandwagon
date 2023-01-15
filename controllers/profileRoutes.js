const router = require("express").Router();
const { Event, User, Genre } = require("../models");
const connection = require("../server");
const withAuth = require("../utils/auth")

//GET ROUTE for artist profile with login
router.get("/profile", withAuth, async (req, res) => {
  try {
    const profileData = await User.findByPk(req.params.id, {
      include: [{ model: Genre }],
    });
    //      !!!!! Pseudocode only. Need to figure out hard code !!!!!!
    //if (loggedInUserEmail !== profileData.email) {
    //res.render('404');
    //      }
    // res.status(200).json(profileData);
    //add code to render to handlebars profile view
    res.render("pages/profile")
  } catch (err) {
    res.status(500).json(err);
  }
});

//Prevent non-logged-in users from viewing Artist Profile /profile

//PUT route to input information (not a POST route because the User object already has been created during signup)

//Listener View for artist profile: 
router.get("/artist/:id", async (req, res) => {
    try {
      const profileData = await User.findByPk(req.params.id, {
        include: [{ model: Genre, attributes:["name"]  }],
      });
      res.render("pages/profile")

    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
