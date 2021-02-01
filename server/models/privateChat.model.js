// 'use strict';
const { Sequelize, DataTypes } = require('sequelize');


module.exports = (sequelize, DataTypes) =>
  sequelize.define('PrivateChat', {
 
    chatID: {  
      type: DataTypes.STRING,
      allowNull: false,
    },
    seller: {  
      type: DataTypes.STRING, //username
      allowNull: false,
    },
    buyer: {  //username
      type: DataTypes.STRING,
      allowNull: false,
    },
    history: {  //array of messages
      type: DataTypes.ARRAY(DataTypes.STRING), //[message] the strings are message IDs
      allowNull: true,
    },
    // The timestamp is added automatically by Sequelize
    // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#timestamps
  });

