// 'use strict';
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('Message', {
    sender: {
      type: DataTypes.INTEGER, //username
      allowNull: false,
    },

    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  message.associate = (model) => {
    message.belongsTo(model.PrivateChat);
  };

  return message;
};
