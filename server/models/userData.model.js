// 'use strict';
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const userData = sequelize.define('UserData', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    username: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    hashed: {
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
    mtgoID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mtgoName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    buyerRating: {
      type: DataTypes.ARRAY(DataTypes.FLOAT),
      defaultValue: [],
      allowNull: true,
    },
    sellerRating: {
      type: DataTypes.ARRAY(DataTypes.FLOAT),
      defaultValue: [],
      allowNull: true,
    },
    numOfStrikes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    transactionSales: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
      
    },
    transactionPurchases: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
      
    },
    transactionTrades: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
    
    },
    watchList: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
    },
    activeOffers: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],    
    },
    avatarUrl: {
       type: DataTypes.STRING,
        allowNull: true,    

    },

  });

  userData.associate = (model) => {
    userData.belongsToMany(model.PrivateChat, { through: 'User_Chat' });
    userData.hasMany(model.PokeTradeData);
    userData.hasMany(model.MtgoTradeData);
  };

  return userData;
};
