// 'use strict';
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const userData = sequelize.define('UserData', {
    // username = userCredentialUsername ...comes from reference in userCredential
    username: {
      primaryKey: true,
      unique: true,
      type: DataTypes.STRING,
      allowNull: true,
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

    // privateChat: {
    //   allowNull: true,
    // },

    // The timestamp is added automatically by Sequelize
    // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#timestamps
  });

  // userData.associate = (model) => {
  //   userData.hasMany(model.TradeData);
  //   // userData.hasMany(model.MtgoTrade);
  //   userData.belongsTo(model.userCredentials);
  //   userData.belongsToMany(model.PrivateChat, { through: 'User_Chat' });
  // };

  return userData;
};
