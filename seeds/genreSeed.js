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
