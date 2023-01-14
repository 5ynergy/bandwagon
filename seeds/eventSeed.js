const { Event } = require("../models")

const eventData = [
    {
      "id": 1,
      "event_name": "Fallapalooza",
      "date": "2023-10-07 5:30:00",
      "content": "Kick off fall with these goofs and their funky music!",
      "artist_id": 101,
      "event_image": null
    },
    {
        "id": 2,
        "event_name": "Dark at 4pm",
        "date": "2023-01-07 16:00:00",
        "content": "Curb your seasonal depression with some fun tunes!",
        "artist_id": 102,
        "event_image": null
    }
]

const seedEvents = () => Event.bulkCreate(eventData)

module.exports = seedEvents