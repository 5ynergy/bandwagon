const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Genre extends Model {}

Genre.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Genre",
  }
);

module.exports = Genre;