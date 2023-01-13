// This is where we will declare the model associations and export them
//Individual model files will be created in this folder
const User = require("./User");
const Event = require("./Event");
const Genre = require("./Genre");

//User hasMany Events
User.hasMany(Event, {
  foreignKey: "artist_id",
  onDelete: "CASCADE",
});
//Events belongTo User
Event.belongsTo(User, {
  foreignKey: "artist_id",
});

//User belongsTo Genre
User.belongsTo(Genre);

//Genre belongsToMany User
Genre.belongsToMany(User, {
  foreignKey: "genre_id",
});

module.exports = {
  User,
  Event,
  Genre,
};
