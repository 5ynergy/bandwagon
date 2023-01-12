const sequelize = require('../config/connection');
const { User, Event, Genre} = require('../models');

const genreData = require('./genreData.json');

const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks:true,
//     returning: true,
//   });

  const genre = await Genre.bulkCreate(genreData);

  process.exit(0);
};

seedDatabase();