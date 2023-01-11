const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    artistName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    socials: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genres: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'genre',
            key: 'id',
          },
    }
  },
  //Insert bcrypt function here{}
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

model.exports = User;
