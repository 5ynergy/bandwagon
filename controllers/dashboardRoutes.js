const router = require("express").Router();
const { Event,} = require("../models");
// ROUTES for dashboard /dashboard 


//GET event data ONLY belonging to the logged-in User
    //Include events (all data)
    //Need to figure out how to set param to only logged in user


//POST event (must be logged in, current user id must match profile owner id) withauth
router.post('/dashboard/new_event', async (req, res) => {
    try{
        const {event_name, date, content, artist_id, event_image, user_id} = req.body;
        //!!!!!Need to figure out how to set the artist_id to the id of the User that is currently logged in
        //const artist_id = 
        const newEvent = await Event.create({
            event_name,
            date,
            content,
        //artist_id (add artist id back once figure out how to set it as the id of the User taht is currently logged in)
        artist_id,    
        event_image,
        user_id,
        })
        res.status(200).json(newEvent)
    } catch (err) {
        res.status(500).json(err)
    }
})

//POST event data (when artists submit "New Event")

    module.exports = router;