// 'use strict';
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) =>
  sequelize.define('PrivateChats', {
    chatID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    seller: {
      type: DataTypes.STRING, //username
      allowNull: false,
    },
    buyer: {
      //username
      type: DataTypes.STRING,
      allowNull: false,
    },
    history: {
      //array of messages
      type: DataTypes.ARRAY(DataTypes.STRING), //[message] the strings are message IDs
      allowNull: true,
    },
    // The timestamp is added automatically by Sequelize
    // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#timestamps
  });
