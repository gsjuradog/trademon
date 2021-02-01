const { Sequelize, DataTypes } = require('sequelize');


module.exports = (sequelize, DataTypes) =>
  sequelize.define('userCredentials', {
    userID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    signUpDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },

 
    // The timestamp is added automatically by Sequelize
    // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#timestamps
  });

