const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('userCredentials', {
    // userID: {
    //   primaryKey: true,
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    username: {
      primaryKey: true,
      unique: true,
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

  user.associate = (model) => {
    user.hasOne(model.UserData);
  };
  return user;
};
