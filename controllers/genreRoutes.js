
// router.get('/genres', (req, res) => {
//     res.render('pages/genres')
// })

//Routes for genre
const router = require('express').Router();
const { Genre, User } = require('../models')

//Search by genre function - GET all genres
router.get("/genres", async (req, res) => {
    try {
        const dbGenreData = await Genre.findAll({
            include: [{ model: User, attributes: ["name"] }],
        });
        //This is for insomnia test: 
        res.status(200).json(dbEventData);
        //TODO: Insert render code for handlebars:
        //
        //
        //

    } catch (err){
    res.status(500).json(err)}
});

// //GET individual genre and show all associated artists
//     //include User (name)

module.exports = router