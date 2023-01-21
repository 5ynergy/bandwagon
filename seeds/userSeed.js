const { User } = require("../models")

const userData = [
    {
        "id": 101,
        "username": "FallGuysOfficial",
        "email": "ilovepumpkinspice@gmail.com",
        "password": "sweaterweather",
        "name": "Fall Guys ",
        "bio": "Just a bunch of guys making sweet jams (both of the fruit and musical nature). Autumn is our favorite season and all our songs give you that sweater weather feel.",
        "socials": "@pumpkinbooty",
        "genre_id": 3,
        "user_image": "https://i.pinimg.com/originals/1a/d9/79/1ad9791a88e8816a67527a04228cbd6a.jpg"
    },
    {
        "id": 102,
        "username": "SadBoisOfficial",
        "email": "imsoemo@gmail.com",
        "password": "gototherapy",
        "name": "Sad Bois Club",
        "bio": "We are a group of sad bois and we sing sad songs... You are guaranteed to cry when you hear our music, or your money back.",
        "socials": "@sadboimusic",
        "genre_id": 3,
        "user_image": "https://www.pngitem.com/pimgs/m/535-5357433_blue-sad-aesthetics-blueaesthetic-cry-boy-lost-aesthetic.png"
      },
      {
        "username": "never2old",
        "email": "never2old@gmail.com",
        "password": "never2old",
        "name": "Never 2 Old",
        "bio": "We are a group of retirees that are finally achieving our dreams of starting the band that we never had time to start! We like to make cover music for all our favorite bands from the good old days.",
        "socials": "Never2Old on SoundCloud",
        "genre_id": 3,
        "user_image": "https://static.vecteezy.com/system/resources/previews/002/186/311/original/an-elderly-man-plays-guitar-in-a-park-the-concept-of-active-old-age-day-of-the-elderly-flat-cartoon-illustration-vector.jpg"
      },
      {
        "username": "beepboop",
        "email": "beepboop@gmail.com",
        "password": "helloworld",
        "name": "DJ BeepBoop",
        "bio": "AI and turntable enthusiast. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt praesentium expedita quam quibusdam enim? Nostrum reprehenderit sunt vel voluptates, illo ullam exercitationem, in porro vero quas debitis error repellat labore. " ,
        "socials": "BeepBoop on Soundcloud",
        "genre_id": 3,
        "user_image":"https://art.pixilart.com/thumb/fcddc046d14d651.png"
      },
      {
        "username": "test",
        "email": "beepboop3@gmail.com",
        "password": "helloworld",
        "name": "Just some guy",
        "bio": "I'm a guy and I play guitar" ,
        "socials": "@GuitarGuy",
        "genre_id": 2,
        "user_image":"https://i.pinimg.com/originals/f7/27/e7/f727e763c8794ca6f4b686fbb2815865.jpg"
      },
      {
        "username": "citypop",
        "email": "citypop@gmail.com",
        "password": "citypop",
        "name": "City Pop Cover Band",
        "bio": "We cover city pop classics. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt praesentium expedita quam quibusdam enim? Nostrum reprehenderit sunt vel voluptates, illo ullam exercitationem, in porro vero quas debitis error repellat labore." ,
        "socials": "@CityPopBand",
        "genre_id": 2,
        "user_image":"https://images.squarespace-cdn.com/content/v1/5bd7707c11f7847c45b4b9dd/0c12af1d-5f96-4108-b2f4-dd6305673ee5/image-asset+%281%29.png"
      },
      {
        "username": "test 2",
        "email": "beepboop2@gmail.com",
        "password": "helloworld2",
        "name": "Test",
        "bio": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt praesentium expedita quam quibusdam enim? Nostrum reprehenderit sunt vel voluptates, illo ullam exercitationem, in porro vero quas debitis error repellat labore.",
        "genre_id": 2,
        "user_image":"https://64.media.tumblr.com/e0e6405c4ebd302cef7b79e5c758a917/tumblr_pxih4us1g01xbk5hwo2_1280.jpg"
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