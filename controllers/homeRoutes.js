const router = require('express').Router()
const { User, Event, Genre} = require('../models')

//GET the homepage to render
router.get("/", (req, res) => {
    //Enter code to also get events for homepage (within a certain date range)
    res.render("pages/homepage")
})


//Login route to redirect to homepage /login
//If a session exists, redirect the request to the homepage
                                                                 

module.exports = router