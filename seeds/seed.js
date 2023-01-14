const sequelize = require('../config/connection');
const { User, Event, Genre } = require('../models');
const path = require("path")
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const seedGenres = require('./genreSeed');
const seedUsers = require('./userSeed');
const seedEvents = require('./eventSeed')

//Jazmin's code

const seedData = async () => {
  await sequelize.sync({ force: true });
  await seedGenres();
  await seedUsers({
    individualHooks: true,
    returning: true,
  });
  await seedEvents();
  console.log('Seeded!');
  process.exit(0);
};

seedData();

// //Grace's code
// const genreData = require('./genreData.json');
// const userData = require('./userData.json');
// const eventData = require('./eventData.json')

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData);

//   // const users = await User.bulkCreate(userData, {
//   //   individualHooks: true,
  //   returning: true,
  // });

  // const events = await Event.bulkCreate(eventData);
  // const genre = await Genre.bulkCreate(genreData);

//   process.exit(0);
// };

// seedDatabase();