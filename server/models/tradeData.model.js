const { Sequelize, DataTypes } = require('sequelize');


module.exports = (sequelize, DataTypes) =>
  sequelize.define('TradeData', {
    tradeID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    numViews: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expirationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    seller: {
      type: DataTypes.STRING,//of type username  FOREIGN KEY
      allowNull: false,
    },
    tradeItemID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tradeItemVariableData: { // PokeVariableData!
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: { // PokeVariableData!
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tax: { // PokeVariableData!
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    buyer: { // username!
      type: DataTypes.STRING,
      allowNull: true,
    },
    offerItemId: { 
      type: DataTypes.STRING,
      allowNull: true,
    },
    offerItemVariableData: { //pokevariabledata
      type: DataTypes.STRING,
      allowNull: false,
    },
    tradeComplete: { 
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    // The timestamp is added automatically by Sequelize
    // http://docs.sequelizejs.com/manual/tutorial/models-definition.html#timestamps
  });