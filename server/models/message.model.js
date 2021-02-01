// 'use strict';
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) =>
  sequelize.define('Message', {
    messageID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    chatID: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    // The timestamp is added automatically by Sequelize
    // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#timestamps
  });
