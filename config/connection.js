//This is where we connect to the sql database with sequelize
const Sequelize = require('sequelize');
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '../.env')});

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

// Making sure that you can connect to the database
// sequelize.authenticate()
// .then(() => {console.log("connected successfully")})
// .catch((err) => {console.log(err)})

// console.log(process.env.DB_PASSWORD)

module.exports = sequelize;
