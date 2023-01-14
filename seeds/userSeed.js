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
        "genre_name": "Pop",
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
        "genre_name": "Rock",
        "user_image": null
      }
  ]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers