const { Sequelize, DataTypes } = require('sequelize');

const expDate = () => Date.now() + 604800000;

module.exports = (sequelize, DataTypes) => {
  const trade = sequelize.define('PokeTradeData', {
    expirationDate: {
      type: DataTypes.DATE,
      defaultValue: expDate(),
    },
    numViews: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    seller: {
      type: DataTypes.STRING,
      allowNull: false,
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
    },
    chargeMove: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isShiny: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    appraisal: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    catchLocation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    listingType: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // --------------------- PRICE FIELDS
    price: {
      // PokeVariableData!
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    tax: {
      // PokeVariableData!
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    // ------------------------- BUYER FIELDS
    buyer: {
      // username!
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    buyersOfferItemId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tradeComplete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  trade.associate = (model) => {
    trade.belongsTo(model.UserData);
  };

  return trade;
};
