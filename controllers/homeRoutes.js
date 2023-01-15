const router = require("express").Router();
const { User, Event, Genre } = require("../models");

//GET the homepage to render including events within cetain date
router.get("/", async (req, res) => {
    try {
        const dbEventData = await Event.findAll({
          //!!!! NEED TO FIGURE OUT HOW TO FILTER BY DATE
          include: [{ model: User }],
        });
        // res.status(200).json(dbEventData);
        res.render("pages/homepage")
    //Insert handlebars code
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});


//GET route for rendering login page
router.get("/login", (req,res) => {
    res.render('pages/login')
});

//GET route for rendering sign up page
router.get('/signup', (req, res) => {
    res.render('pages/signup')
})

//Login/logout/signup POST routes - these will be found in User Routes

module.exports = router;
