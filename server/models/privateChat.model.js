// 'use strict';
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const privateChat = sequelize.define('PrivateChat', {
    users: {
      type: DataTypes.ARRAY(DataTypes.INTEGER), //user ids
      allowNull: false,
    },
  });

  privateChat.associate = (model) => {
    privateChat.hasMany(model.Message);
    privateChat.belongsToMany(model.UserData, {
      through: 'User_Chat',
    });
  };

  return privateChat;
};
