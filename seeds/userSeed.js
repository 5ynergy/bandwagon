const { User } = require("../models")

const userData = [
    {
        "id": 101,
        "username": "FallGuysOfficial",
        "email": "ilovepumpkinspice@gmail.com",
        "password": "sweaterweather",
        "name": "Fall Guys ",
        "bio": "Autumn is our favorite season and all our songs give you that sweater weather feel.",
        "socials": "@pumpkinbooty",
        "genre_id": "3",
        "user_name": null
    },
    {
        "id": 102,
        "username": "SadBoisOfficial",
        "email": "imsoemo@gmail.com",
        "password": "gototherapy",
        "name": "Sad Bois Club",
        "bio": "We are a group of sad bois and we sing sad songs...",
        "socials": "@sadboimusic",
        "genre_id": "5",
        "user_image": null
      },
      {
        "username": "graceIsCrying",
        "email": "gee.yao@gmail.com",
        "password": "imsotired123",
        "name": "Grace",
        "bio": "When will this suffering end",
        "socials": "github.com/gyao1487",
        "genre_id": 3,
        "user_image": null
      },

  ]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers

// //Sample json data for Insomnia test:

// {
// 	"username": "sadgirlmusic",
//     "email": "sza@gmial.com",
//     "password": "ijustkilledmyex",
//     "name": "SZA",
//     "bio": "I make sexy sad girl songs",
//     "socials": "SZA on Apple Music",
//     "genre_id": 3,
//     "user_image": null
// }