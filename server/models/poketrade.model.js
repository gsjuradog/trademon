const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const pokemonToTrade = sequelize.define('PokemonToTrade', {
    name: {
      type: DataTypes.STRING, //username
      allowNull: false,
    },
    pokeNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sprite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    generation: {
      type: DataTypes.INTEGER,
      allowNull: true, //change
    },
    //pokevariable
    pokeLvl: {
      type: DataTypes.INTEGER,
      allowNull: true, //change
    },
    fastMove: {
      type: DataTypes.STRING,
      allowNull: true, //change
    },
    chargeMove: {
      type: DataTypes.STRING,
      allowNull: true, //change
    },
    isShiny: {
      type: DataTypes.BOOLEAN,
      allowNull: true, //change
    },
    appraisal: {
      type: DataTypes.STRING,
      allowNull: true, ///change
    },
  });

  pokemonToTrade.associate = (model) => {
    pokemonToTrade.belongsTo(model.UserData);
  };

  return pokemonToTrade;
};
