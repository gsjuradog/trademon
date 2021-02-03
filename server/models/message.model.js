// 'use strict';
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('Message', {
    messageID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    from: {
      type: DataTypes.STRING, //username
      allowNull: false,
    },
    to: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishDate: {
      //array of messages
      type: DataTypes.DATE, //[message] the strings are message IDs
      defaultValue: DataTypes.NOW,
    },
  });

  message.associate = (model) => {
    message.belongsTo(model.PrivateChat);
  };

  return message;
};
