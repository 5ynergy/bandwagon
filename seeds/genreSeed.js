const { Genre } = require("../models")

const genreData = [
  {
      "name": "R&B"
  },
  {
      "name": "Pop"
  },
  {
      "name": "Hip-Hop"
  },
  {
      "name": "Latin"
  },
  {
      "name": "Electronic"
  },
  {
      "name": "DJ"
  },
  {
      "name": "Dance/Alternative"
  },
  {
      "name": "Rock"
  },
  {
      "name": "Indie"
  },
  {
      "name": "Soul/Funk"
  },
  {
      "name": "Folk/Acoustic"
  },
  {
      "name": "Metal"
  },
  {
      "name": "Blues"
  },
  {
      "name": "Country"
  }
]

const seedGenres = () => Genre.bulkCreate(genreData)

module.exports = seedGenres