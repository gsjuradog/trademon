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
    expirationDate: {
      type: DataTypes.DATE,
      defaultValue: expDate(),
      allowNull: true,
    },
    numViews: {
      type: DataTypes.INTEGER,
      defaultValue: 4,
      //allowNull: true,
    },
    seller: {
      type: DataTypes.STRING, //of type username  FOREIGN KEY
      defaultValue: 'seller',
      allowNull: true,
    },

    //----------------------

    pokeNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pokeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pokeSprite: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pokeGen: {
      type: DataTypes.INTEGER,
      allowNull: true, //change
      defaultValue: 2,
    },
    // -------------------- pokevariable
    pokeLvl: {
      type: DataTypes.INTEGER,
      allowNull: true, //change
      defaultValue: 100,
    },
    fastMove: {
      type: DataTypes.STRING,
      allowNull: true, //change
      defaultValue: 12,
    },
    chargeMove: {
      type: DataTypes.STRING,
      allowNull: true, //change
    },
    isShiny: {
      type: DataTypes.BOOLEAN,
      allowNull: true, //change
      defaultValue: false,
    },
    appraisal: {
      type: DataTypes.INTEGER,
      allowNull: true, ///change
      defaultValue: 3,
    },

    // --------------------- PRICE FIELDS
    price: {
      // PokeVariableData!
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 10,
    },
    tax: {
      // PokeVariableData!
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
    // ------------------------- BUYER FIELDS
    buyer: {
      // username!
      type: DataTypes.STRING,
      allowNull: true,
    },
    buyersOfferItemId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tradeComplete: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },

    // The timestamp is added automatically by Sequelize
    // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#timestamps
  });
  //Trade has two pokemons that are going to be traded, each trade belongs to many users
  // trade.associate = (model) => {
  //   // trade.hasMany(model.PokemonToTrade);
  //   trade.belongsToMany(model.UserData, {
  //     through: 'Trade_Users',
  //     as: 'PokeTrade',
  //   });
  // };

  return trade;
};
