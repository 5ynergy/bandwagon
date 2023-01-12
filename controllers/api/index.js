//This is where we will put the routers for the api routes.
//Api routes will be in this folderconst router = require('express').Router();

const loginRoutes = require('./loginRoutes');

router.use('/user', userRoutes);
module.exports = router;