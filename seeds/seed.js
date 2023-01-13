const sequelize = require('../config/connection');
const { User, Event, Genre } = require('../models');

const genreData = require('./genreData.json');
const userData = require('./userData.json');
const eventData = require('./eventData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const events = await Event.bulkCreate(eventData);
  const genre = await Genre.bulkCreate(genreData);

  process.exit(0);
};

seedDatabase();