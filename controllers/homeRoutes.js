const router = require('express').Router()
const { User, Event, Genre} = require('../models')

//GET the homepage to render
router.get("/", (req, res) => {
    res.render("pages/homepage")
})


//GET all events (within certain data range) for homepage "/""
    //Include artist (artistname)


//Login route to redirect to homepage /login
//If a session exists, redirect the request to the homepage
                                                                 

module.exports = router