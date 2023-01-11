//This is where we will put our middleware/router for the routes
//Home routes will be in this folder
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

//bandwagon.com/
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;