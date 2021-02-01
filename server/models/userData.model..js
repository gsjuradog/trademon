// 'use strict';
const { Sequelize, DataTypes } = require('sequelize');


module.exports = (sequelize, DataTypes) =>
  sequelize.define('UserData', {
    username: {  // PRIMARY KEY
      type: DataTypes.STRING,
      allowNull: false,
    },
    trainerID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    trainerName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mtgoId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mtgoName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    buyerRating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    numBuyRatings: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    sellerRating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    numSellRatings: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    numOfStrikes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    privateMesg: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // The timestamp is added automatically by Sequelize
    // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#timestamps
  });
