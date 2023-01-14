const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Genre extends Model {}

Genre.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   // autoIncrement: true,
    // }
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