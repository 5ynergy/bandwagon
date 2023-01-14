const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");
const Genre = require("./Genre");

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    bio: {
      type: DataTypes.STRING
    },
    socials: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    genre_id: {
      type: DataTypes.STRING,
      // allowNull: false,
      references: {
        model: "Genre",
        key: "id",
      }
    },
    user_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // When calling image, when finding User, take userImage string, put that into an img tag src to show the image
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "User",
  }
);

module.exports = User;
