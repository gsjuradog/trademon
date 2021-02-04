const { Sequelize, DataTypes } = require('sequelize');

const expDate = () => Date.now() + 604800000;
//
module.exports = (sequelize, DataTypes) => {
  const mtgotrade = sequelize.define('MtgoTrade', {
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
      defaultValue: 0,
      //allowNull: true,
    },
    seller: {
      type: DataTypes.STRING, //of type username  FOREIGN KEY
      defaultValue: 'seller',
      allowNull: true,
    },

    //----------------------

    cardName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    extraName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cardImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    set: {
      type: DataTypes.STRING,
      allowNull: true, //change,
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
    originaltype: {
      type: DataTypes.STRING,
      allowNull: true, //change
    },
    rarity: {
      type: DataTypes.STRING,
      allowNull: true, //change
      defaultValue: '',
    },
    color: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true, //change
      defaultValue: ['B'],
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
      allowNull: true,
      defaultValue: 0,
    },
    tax: {
      // MTGOVariableData!
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    // ------------------------- BUYER FIELDS
    buyer: {
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

  mtgotrade.associate = (model) => {
    mtgotrade.belongsToMany(model.UserData, {
      through: 'MtgoTrade_Users',
      as: 'Mtgotrade',
    });
  };

  return mtgotrade;
};
