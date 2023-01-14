// This is where we will declare the model associations and export them
//Individual model files will be created in this folder
const User = require("./User");
const Event = require("./Event");
const Genre = require("./Genre");

//User hasMany Events
// User.hasMany(Event, {
//   foreignKey: "artist_id",
//   onDelete: "CASCADE",
// });
//Events belongTo User
// Event.belongsTo(User, {
// //   foreignKey: "artist_id",
// // });

// //User belongsTo Genre
// User.belongsToMany(Genre, { through: "ArtistGenres" }
// );

// //Genre belongsToMany User
// Genre.belongsToMany(User, {
//   through: "ArtistGenres",
// });

User.belongsToMany(Genre, { 
    through: 'UserGenres'
})
Genre.belongsToMany(User, { 
    through: 'UserGenres'
 })

User.hasMany(Event)
Event.belongsTo(User, {
    foreignKey: 'artist_id'
})

module.exports = {
  User,
  Event,
  Genre,
};
