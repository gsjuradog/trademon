const { Sequelize, DataTypes } = require('sequelize');

const expDate = () => Date.now() + 604800000;

module.exports = (sequelize, DataTypes) => {
  const mtgotrade = sequelize.define('MtgoTradeData', {
    expirationDate: {
      type: DataTypes.DATE,
      defaultValue: expDate(),
      allowNull: true,
    },
    numViews: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    //----------------------

    cardName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cardImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    setName: {
      type: DataTypes.STRING,
      allowNull: true, ///change
    },
    convertedManaCost: {
      type: DataTypes.FLOAT,
      allowNull: true, //change
    },
    manaCost: {
      type: DataTypes.STRING, //'{3}{W}{R}' = 3 uncolored mana 1 white 1 red
      allowNull: true, //change
    },
    mainType: {
      type: DataTypes.STRING,
      allowNull: true, //change
    },
    subTypes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true, //change
    },
    rarity: {
      type: DataTypes.STRING,
      allowNull: true, //change
      defaultValue: '',
    },
    colors: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true, //change
    },
    //---------------------- Variable data
    isFoil: {
      type: DataTypes.BOOLEAN,
      allowNull: true, //change
      defaultValue: false,
    },

    // --------------------- PRICE FIELDS
    price: {
      //  MTGOVariableData!
      type: DataTypes.INTEGER,

      defaultValue: 0,
    },
    tax: {
      // MTGOVariableData!
      type: DataTypes.INTEGER,

      defaultValue: 0,
    },
    listingType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // ------------------------- BUYER FIELDS
    buyer: {
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

  mtgotrade.associate = (model) => {
    mtgotrade.belongsTo(model.UserData);
  };

  return mtgotrade;
};
