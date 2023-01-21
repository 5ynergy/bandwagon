const { Event } = require("../models");

const eventData = [
  {
    id: 1,
    event_name: "Fallapalooza",
    date: "2023-01-23",
    time: "5:30 PM",
    address: "633 Clark St, Evanston, IL 60208",
    content: "Kick off fall with these goofs and their funky music!",
    artist_id: 101,
    event_image:
      "https://i.pinimg.com/originals/2a/da/71/2ada717a08fdded71ba96f7b269ebb6d.jpg",
  },
  {
    id: 2,
    event_name: "Dark at 4pm",
    date: "2023-01-23",
    time: "5:30 PM",
    address: "1901 W Madison St, Chicago, IL 60612",
    content: "Curb your seasonal depression with some fun tunes!",
    artist_id: 102,
    event_image: "https://images.nightcafe.studio/jobs/TttjxqG60eUq3twdysZE/TttjxqG60eUq3twdysZE--1--mxcb8.jpg?tr=w-1600,c-at_max"
  },
  {
    id: 3,
    event_name: "Nerd Alert",
    date: "2023-01-23",
    time: "9:00 PM",
    address: "633 Clark St, Evanston, IL 60208",
    content: "Nerds know how to have fun too! Come jam to your favorite video game soundtrack remixes",
    artist_id: 104,
    event_image: "https://external-preview.redd.it/f6z6NaAERey3YCq9-Jqh6dA02YQxC9WYRcu8YgTVbTA.jpg?auto=webp&s=f29ae6df2265fcad8c8a7dbaf2e64a3193df5b8f",
  },
  {
    id: 4,
    event_name: "Beep Boop",
    date: "2023-01-23",
    time: "7:30 PM",
    address: "1901 W Madison St, Chicago, IL 60612",
    content: "First AI generated music concert in Chicago! Hello World! ",
    artist_id: 104,
    event_image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fe02448c-c834-4bd1-91ed-20515f238412/dcj8e0m-9dd6ee27-a5bf-40b0-88f4-5180e4304839.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZlMDI0NDhjLWM4MzQtNGJkMS05MWVkLTIwNTE1ZjIzODQxMlwvZGNqOGUwbS05ZGQ2ZWUyNy1hNWJmLTQwYjAtODhmNC01MTgwZTQzMDQ4MzkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Bud7aGJbjWqfZQbWETqUalUNGoddHA4-FY5_cj4435M",
  },
  {
    id: 5,
    event_name: "Smells like Boomer Spirit",
    date: "2023-01-24",
    time: "7:30 PM",
    address: "633 Clark St, Evanston, IL 60208",
    content: "We're only going to play one Nirvana song, and then all the other songs are going to be oldies like us. Hope you enjoy!",
    artist_id: 103,
    event_image: "https://media.istockphoto.com/id/1163613172/photo/senior-couple-with-electric-guitars-singing-on-a-microphone.jpg?s=612x612&w=0&k=20&c=Ey3s7yFudIZvoMNtl4D2RHGIkl2OY5YnZIi3paNHEUo=",
  },
  {
    id: 6,
    event_name: "City Pop Night",
    date: "2023-01-24",
    time: "5:30 PM",
    address: "633 Clark St, Evanston, IL 60208",
    content: "Playing your favorite city pop hits, with a special tribute to Takako Mamiya! ",
    artist_id: 106,
    event_image: "https://images.squarespace-cdn.com/content/v1/5bd7707c11f7847c45b4b9dd/6de614dc-cdf3-480f-9cb3-c94fec312bf4/R-6444412-1588694917-2613.jpg?format=750w",
  },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;

// sample input Data
// {
//   "event_name": "This might work!",
//   "date": "2023-01-07 16:00:00",
//   "address": "somewhere where this works",
//   "content": "If you see this, it's working",
//   "artist_id": 103,
//   "event_image": null
// }
//    {
//       "event_name": "If this shows up, it's not working",
//       "date": "2023-01-14 16:00:00",
//       "address": "the sunken place",
//       "content": "This is the event that should NOT show up",
//       "artist_id": 101,
//       "event_image": null
//   },
//   {
//     "event_name": "If this shows up, it IS working",
//     "date": "2023-01-15 16:00:00",
//     "address": "the sunken place",
//     "content": "This is the event that SHOULD show up",
//     "artist_id": 101,
//     "event_image": null
// },
