const { Genre } = require("../models");

const genreData = [
  {
    name: "R&B",
    image: "",
    banner:""
  },
  {
    name: "Pop",
    image: "",
    banner:""
  },
  {
    name: "Hip-Hop",
    image: "",
    banner:""
  },
  {
    name: "Latin",
    image: "",
    banner:""
  },
  {
    name: "Electronic",
    image: "",
    banner:""
  },
  {
    name: "DJ",
    image: "",
    banner:""
  },
  {
    name: "Dance/Alternative",
    image: "",
    banner:""
  },
  {
    name: "Rock",
    image: "",
    banner:""
  },
  {
    name: "Indie",
    image: "",
    banner:""
  },
  {
    name: "Soul/Funk",
    image: "",
    banner:""
  },
  {
    name: "Folk/Acoustic",
    image: "",
    banner:""
  },
  {
    name: "Metal",
    image: "",
    banner:""
  },
  {
    name: "Blues",
    image: "",
    banner:""
  },
  {
    name: "Country",
    image: "",
    banner:""
  },
];

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;
