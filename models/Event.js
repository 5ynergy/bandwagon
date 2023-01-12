const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    eventName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist_id: {
        references: {
            model: 'user',
            key: 'id',
          },
    },
    event_image: {
        type: DataTypes.STRING,
        allowNull: true,
    }
// When calling image, when finding User, take userImage string, put that into an img tag src to show the image
  },
  //Figure out how to create image attribute
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "event",
  }
);

model.exports = Event