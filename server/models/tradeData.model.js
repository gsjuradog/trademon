const { Sequelize, DataTypes } = require('sequelize');

const expDate = () => Date.now() + 604800000;

module.exports = (sequelize, DataTypes) => {
  const trade = sequelize.define('TradeData', {
    tradeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    publishDate: {
      type: DataTypes.DATE,
      //allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    numViews: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      //allowNull: true,
    },
    expirationDate: {
      type: DataTypes.DATE,
      defaultValue: expDate(),
      allowNull: true,
    },
    seller: {
      type: DataTypes.STRING, //of type username  FOREIGN KEY
      allowNull: true,
    },
    tradeItemID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tradeItemVariableData: {
      // PokeVariableData!
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      // PokeVariableData!
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tax: {
      // PokeVariableData!
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    buyer: {
      // username!
      type: DataTypes.STRING,
      allowNull: true,
    },
    offerItemId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    offerItemVariableData: {
      //pokevariabledata ----> Combined in pokemonToTrade with pokeconstants
      type: DataTypes.STRING,
      allowNull: true,
    },
    tradeComplete: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    // The timestamp is added automatically by Sequelize
    // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#timestamps
  });
  //Trade has two pokemons that are going to be traded, each trade belongs to many users
  trade.associate = (model) => {
    trade.hasMany(model.PokemonToTrade);
    trade.belongsToMany(model.UserData, {
      through: 'Trade_Users',
      as: 'Trade',
    });
  };

  return trade;
};
