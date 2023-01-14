const router = require('express').Router();
const { Event, User } = require('../models');
const connection = require("../server")

// GET the profile page to render
router.get('/profile', async (req, res) => {
    const Users = await User.findAll()
    res.render('pages/profile', {
        name: "Jeff"
    })
})

//Profile routes ONLY for logged in users

    //Prevent non-logged-in users from viewing Artist Profile /profile

    //GET Artist data where id = logged in user's id
    //Include genre (name)

module.exports = router