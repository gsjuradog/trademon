// 'use strict';
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const userData = sequelize.define('UserData', {
    trainerID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    trainerName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mtgoID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mtgoName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    buyerRating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    numBuyReviews: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    sellerRating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    numSellReviews: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    numOfStrikes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
  });

  userData.associate = (model) => {
    userData.hasOne(model.userCredentials);
    userData.belongsToMany(model.PrivateChat, { through: 'User_Chat' });
    userData.hasMany(model.PokeTradeData);
    userData.hasMany(model.MtgoTradeData);
  };

  return userData;
};
