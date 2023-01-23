// This is where Google API is going to be called (i think)
// Will need to find a way to hook it up to our database 
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '../.env')});

console.log("maps JS connected")

var platform = new H.service.Platform({
    'apikey': `${process.env.HERE_ACCESS_KEY}`
  });

console.log(process.env.HERE_ACCESS_KEY)

module.exports = platform