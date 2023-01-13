const router = require('express').Router();
const { Event, User } = require('../models');

//GET all events ('/events')
router.get('/events', async (req, res) => {
    try{
        const dbEventData = await Event.findAll({
            //Will find out how to filter by date later
            include: [
                {model: User,
                attributes: ["name"],
            },
            ],
        });
        // const events = dbEventdata.map((event) =>
        // event.get({plain:true})
        // );
        // res.render("pages/events", {events});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;