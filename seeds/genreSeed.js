const { Genre } = require("../models");

const genreData = [
  {
    name: "R&B",
    image: "",
  },
  {
    name: "Pop",
    image: "",
  },
  {
    name: "Hip-Hop",
    image: "",
  },
  {
    name: "Latin",
    image: "",
  },
  {
    name: "Electronic",
    image: "",
  },
  {
    name: "DJ",
    image: "",
  },
  {
    name: "Dance/Alternative",
    image: "",
  },
  {
    name: "Rock",
    image: "",
  },
  {
    name: "Indie",
    image: "",
  },
  {
    name: "Soul/Funk",
    image: "",
  },
  {
    name: "Folk/Acoustic",
    image: "",
  },
  {
    name: "Metal",
    image: "",
  },
  {
    name: "Blues",
    image: "",
  },
  {
    name: "Country",
    image: "",
  },
];

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;
