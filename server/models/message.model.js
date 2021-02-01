 
 // 'use strict';
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) =>
  sequelize.define('Message', {
 
    messageID: {  
      type: DataTypes.STRING,
      allowNull: false,
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
    publishDate: {  //array of messages
      type: DataTypes.DATE, //[message] the strings are message IDs
      allowNull: false,
    },
    // The timestamp is added automatically by Sequelize
    // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#timestamps
  });

