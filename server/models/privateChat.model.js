// 'use strict';
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const privateChat = sequelize.define('PrivateChat', {
    users: {
      type: DataTypes.ARRAY(DataTypes.INTEGER), //username
      allowNull: false,
    },

    // history: {
    //   //array of messages
    //   type: DataTypes.ARRAY(DataTypes.STRING), //[message] the strings are message IDs
    //   allowNull: true,
    // },
    // The timestamp is added automatically by Sequelize
    // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#timestamps
  });

  privateChat.associate = (model) => {
    privateChat.hasMany(model.Message);
    privateChat.belongsToMany(model.UserData, {
      through: 'User_Chat',
    });
  };

  return privateChat;
};
