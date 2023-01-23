const { Genre } = require("../models");

const genreData = [
  {
    name: "R&B",
    image: "",
    banner:"https://images.pexels.com/photos/6985132/pexels-photo-6985132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Pop",
    image: "",
    banner:"https://images.pexels.com/photos/7135073/pexels-photo-7135073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Hip-Hop",
    image: "",
    banner:"https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Latin",
    image: "",
    banner:"https://images.pexels.com/photos/7130465/pexels-photo-7130465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Electronic",
    image: "",
    banner:"https://images.pexels.com/photos/6985048/pexels-photo-6985048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "DJ",
    image: "",
    banner:"https://images.pexels.com/photos/7135028/pexels-photo-7135028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Dance/Alternative",
    image: "",
    banner:"https://images.pexels.com/photos/7135074/pexels-photo-7135074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Rock",
    image: "",
    banner:"https://images.pexels.com/photos/7135121/pexels-photo-7135121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Indie",
    image: "",
    banner:"https://images.pexels.com/photos/7130498/pexels-photo-7130498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  },
  {
    name: "Soul/Funk",
    image: "",
    banner:"https://images.pexels.com/photos/7130499/pexels-photo-7130499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Folk/Acoustic",
    image: "",
    banner:"https://images.pexels.com/photos/6985273/pexels-photo-6985273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Metal",
    image: "",
    banner:"https://images.pexels.com/photos/6984989/pexels-photo-6984989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Blues",
    image: "",
    banner:"https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Country",
    image: "",
    banner:"https://images.pexels.com/photos/7130557/pexels-photo-7130557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
];

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;
