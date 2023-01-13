// //Routes for genre
// const router = require('express').Router();
// const { Genre, User } = require('../models')
// //Search by genre function - GET all genres
// router.get("/genres", async (req, res) => {
//     try {
//         const dbGenreData = await Genre.findAll({
//             include: [
//                 {
//                     model: User,
//                     attributes: ["name"]
//                 },
//             ],
//         }),
        
//     }
// })


// //GET 1 genre
//     //include User (name)