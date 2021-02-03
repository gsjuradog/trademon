const db = require('../models/index');

const createMTGOTrade = async (req, res) => {
  try {
    console.log('A User Is Creating An Offer!');
    const {
      numViews,
      seller,
      cardName,
      extraNames,
      set,
      setName,
      manaCost,
      type,
      rarity,
      isFoil,
      price,
      tax,
    } = req.body;

    console.log(seller);
    const reply = await db.TradeData.create({
      numViews: numViews,
      seller: seller,
      cardName: cardName,
      extraNames: extraNames,
      set: set,
      setName: setName,
      manaCost: manaCost,
      type: type,
      rarity: rarity,
      isFoil: isFoil,
      price: price,
      tax: tax,
    });
    res.status(200).send(reply);
  } catch (err) {
    console.log('POST ERROR IN MTGO', err);
    res.status(500).send('POST ERROR');
  }
};

const fetchMTGOTrades = async (req, res) => {
  try {
    console.log('Someone Requested Active MTGO Trades!');
    const reply = await db.MtgoTrade.findAll();
    res.status(200).send(reply);
  } catch (err) {
    console.log('FETCH ERROR IN MTGO', err);
    res.status(500).send('FETCH ERROR');
  }
};

const fetchMTGOTradesByDate = async (req, res) => {
  try {
    console.log('Showing recent MTGO Trades!');
    const reply = await db.MtgoTrade.findAll({
      limit: 2,
      order: [['publishDate', 'DESC']],
    });
    res.status(200).send(reply);
  } catch (err) {
    console.log('FETCH ERROR IN MTGO', err);
    res.status(500).send('FETCH ERROR IN TRADES BY DATE');
  }
};

const editMTGOTrade = async (req, res) => {
  try {
    console.log('A User Is Editing An MTGO Offer!');
    const {
      numViews,
      seller,
      cardName,
      extraNames,
      set,
      ConvertedManaCost,
      setName,
      manaCost,
      type,
      rarity,
      isFoil,
      price,
      tax,
    } = req.body;
    const filter = { where: { tradeID: tradeID } };
    const reply = await db.TradeData.findOne(filter);
    //Check if record exists in db
    if (reply) {
      reply.update({
        numViews: numViews,
        seller: seller,
        cardName: cardName,
        extraNames: extraNames,
        set: set,
        setName: setName,
        ConvertedManaCost: ConvertedManaCost,
        manaCost: manaCost,
        type: type,
        rarity: rarity,
        isFoil: isFoil,
        price: price,
        tax: tax,
      });
    }
    res.status(200).send(reply);
  } catch (err) {
    console.log('POST ERROR IN MTGO', err);
    res.status(500).send('POST ERROR');
  }
};

const deleteMTGOTrade = async (req, res) => {
  try {
    console.log(req.body);
    const { tradeID } = await req.body;
    const reply = await db.MtgoTrade.findOne({ where: { tradeID: tradeID } });
    if (reply) {
      const deleted = await db.tgoTrade.destroy({
        where: { tradeID: tradeID },
      });
      res.status(204).send(deleted);
    }
  } catch (error) {
    console.log('No Trade With That ID Found', err);
    res.status(500).send('DELETE ERROR');
  }
};

module.exports = {
  createMTGOTrade,
  fetchMTGOTrades,
  fetchMTGOTradesByDate,
  editMTGOTrade,
  deleteMTGOTrade,
};
