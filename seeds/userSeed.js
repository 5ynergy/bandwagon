const { User } = require("../models")

const userData = [
    {
        "id": 101,
        "username": "FallGuysOfficial",
        "email": "ilovepumpkinspice@gmail.com",
        "password": "sweaterweather",
        "name": "Beyonce",
        "socials": "@pumpkinbooty",
        "genre_name": "Pop",
        "user_name": null
    },
    {
        "id": 102,
        "username": "SadBoisOfficial",
        "email": "imsoemo@gmail.com",
        "password": "gototherapy",
        "name": "Alicia Keys",
        "socials": "@sadboimusic",
        "genre_name": "Rock",
        "user_image": null
      }
  ]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers