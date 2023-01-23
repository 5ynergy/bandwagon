const sequelize = require('../config/connection');
const { User, Event, Genre } = require('../models');
const path = require("path")
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const seedGenres = require('./genreSeed');
const seedUsers = require('./userSeed');
const seedEvents = require('./eventSeed')

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