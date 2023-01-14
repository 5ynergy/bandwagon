const router = require('express').Router();
const { Event, User } = require('../models');

// GET the events page to render
// router.get('/events', (req, res) => {
//     res.render('pages/events')
// })

// const eventPage = (req, res) => { res.render("pages/events") }

// GET all events ('/events')
router.get('/events', async (req, res) => {
    try {
        const dbEventData = await Event.findAll({
            //Will find out how to filter by date later
            include: [{ model: User }]
        });
        // //This is for insomnia test: WORKS!
        res.status(200).json(dbEventData);

    
        const events = dbEventdata.map((event) =>
            event.get({ plain: true })
        );
        res.render("events", {layout:"main", events});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//GET individual event
router.get('/events/:id', async (req, res) => {
    try {
        const dbEventData = await Event.findByPk(req.params.id, {
            include: [{model: User}]
        });
        if (!dbEventData) {
            res.render("pages/404")
        };
        //This is 
        res.status(200).json(dbEventData);
        //Add rendering to handlebars code below
        //
        //
    } catch (err) {
        res.status(500).json(err);
    }
})




module.exports = router;