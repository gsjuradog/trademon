const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const userCredentials = sequelize.define('userCredentials', {
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
  });

  userCredentials.associate = (model) => {
    userCredentials.belongsTo(model.UserData);
  };
  return userCredentials;
};
