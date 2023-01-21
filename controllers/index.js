const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const genreRoutes = require("./genreRoutes");
const eventRoutes = require("./eventRoutes");
const profileRoutes = require("./profileRoutes");
const dashboardRoutes = require("./dashboardRoutes");
const userRoutes = require("./userRoutes");

// //bandwagon.com/

//Routes are categorized by function, meaning that these routes correspond to the routes accessed by the page
//eg. the route for editing artist data (PUT) actually is in profile routes, because the function is housed there

router.use(homeRoutes);
//  "/" : GET route for rendering homepage and events within certain date
//  "/signup" : POST route for creating new user
//  "/login" : POST route for user login/authentication
// "/logout" : DELETE route to end session and redirect to the homepage "/"

router.use(genreRoutes);
//  "/genres": GET route to display ALL genres
// "/genres/:id" GET route for individual genre, and showing all associated artists

router.use(eventRoutes);
// "/events" : GET ALL events
// "/events/:id" : GET individual event (displays on individual event page)

router.use(profileRoutes);
//  "/profile/:id": GET route for artist profile (only displays when User id matches id in URL)
// "/profile/:id" : PUT route for editing data (only NICE to have )
// "/artist/:id" : GET artist by ID (listener view). Also displays artist's events as cards

router.use(dashboardRoutes);
// "/dashboard/:id" : GET route for getting events ONLY belonging to the logged-in User
// "/dashboard/:id" : PUT route for creating new event ONLY if logged in as user

router.use(userRoutes);

//displays a 404 error when navigating to a link that does not exist
router.use("*", (req, res) => {
  res.render("pages/404");
});

module.exports = router;
