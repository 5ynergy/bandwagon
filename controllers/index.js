//This is where we will put our middleware/router for the routes
//Home routes will be in this folder
const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const genreRoutes = require("./genreRoutes");
const eventRoutes = require("./eventRoutes");
const artistRoutes = require("./artistRoutes");
const profileRoutes = require("./profileRoutes");

// //bandwagon.com/
router.use(homeRoutes);
router.use(genreRoutes);
router.use(eventRoutes);
router.use(profileRoutes);
router.use(artistRoutes)
// router.use('/api', apiRoutes);

//displays a 404 error when navigating to a link that does not exist
router.use("*", (req, res) => {
  res.render("pages/404");
});

// router.use((req, res) => {
//   res.send("<h1>Wrong Route!</h1>")
// });

module.exports = router;
