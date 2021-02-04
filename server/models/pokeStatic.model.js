const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const pokeStatic = sequelize.define('pokeStatic', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      primaryKey: true,
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    sprite: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    generation: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    legendary: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });

  return pokeStatic;
};