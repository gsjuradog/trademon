const db = require('../models/index');
const services = require('../services/services');

const createMTGOTrade = async (req, res) => {
  try {
    console.log('A User Is Creating An Offer!');
    const { id, token } = req.headers;
    let tokenValid;
    if (token) {
      tokenValid = await services.checkToken(id, token);
    }
    let reply = '';
    if (tokenValid === true || process.env.IS_PRODUCTION === 'false') {
      const {
        numViews,
        seller,
        cardName,
        cardImage,
        setName,
        convertedManaCost,
        manaCost,
        mainType,
        subTypes,
        rarity,
        colors,
        isFoil,
        price,
        tax,
        listingType,
      } = req.body;
      reply = await db.MtgoTradeData.create({
        numViews,
        seller,
        cardName,
        cardImage,
        setName,
        convertedManaCost,
        manaCost,
        mainType,
        subTypes,
        rarity,
        colors,
        isFoil,
        price,
        tax,
        listingType,
        UserDatumId: id,
      });
    } else reply = { error: 'User not authorized to make this request.' };
    res.status(200).send(reply);
  } catch (err) {
    console.log('POST ERROR IN MTGO', err);
    res.status(500).send('POST ERROR');
  }
};

const fetchMTGOTrades = async (req, res) => {
  try {
    console.log('Someone Requested Active MTGO Trades!');
    const reply = await db.MtgoTradeData.findAll();
    res.status(200).send(reply);
  } catch (err) {
    console.log('FETCH ERROR IN MTGO', err);
    res.status(500).send('FETCH ERROR');
  }
};

const fetchMTGOTradesByDate = async (req, res) => {
  try {
    console.log('Showing recent MTGO Trades!');
    const reply = await db.MtgoTradeData.findAll({
      limit: 8,
      order: [['createdAt', 'DESC']],
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
    const { id, token } = req.headers;
    let tokenValid;
    if (token) {
      tokenValid = await services.checkToken(id, token);
    }
    let reply;
    if (tokenValid === true || process.env.IS_PRODUCTION === 'false') {
      const { id, numViews, isFoil, price, tax, listingType } = req.body;
      const filter = { where: { id: id } };
      reply = await db.MtgoTradeData.findOne(filter);
      //Check if record exists in db
      if (reply) {
        reply.update({
          numViews,
          isFoil,
          price,
          tax,
          listingType,
        });
      }
    } else reply = { error: 'User not authorized to make this request.' };
    res.status(200).send(reply);
  } catch (err) {
    console.log('POST ERROR IN MTGO', err);
    res.status(500).send('POST ERROR');
  }
};

const deleteMTGOTrade = async (req, res) => {
  try {
    const { id, token } = req.headers;
    let tokenValid;
    if (token) {
      tokenValid = await services.checkToken(id, token);
    }
    let reply;
    if (tokenValid === true || process.env.IS_PRODUCTION === 'false') {
      const { id } = await req.body;
      reply = await db.MtgoTradeData.findOne({ where: { id: id } });
      if (reply) {
        await db.MtgoTradeData.destroy({
          where: { id: id },
        });
      } else reply = { error: 'User not authorized to make this request.' };
      res.status(200).send(reply);
    }
  } catch (error) {
    console.log('No Trade With That ID Found', err);
    res.status(500).send('DELETE ERROR');
  }
};

const fetchOneMTGOTrade = async (req, res) => {
  try {
    console.log('Someone Requested Trade Details!');
    const { id } = req.body;
    const filter = { where: { id: id } };
    const reply = await db.MtgoTrade.findOne(filter);
    res.status(200).send(reply);
  } catch (err) {
    console.log('FETCH ERROR', err);
    res.status(500).send('FETCH ERROR');
  }
};

module.exports = {
  createMTGOTrade,
  fetchMTGOTrades,
  fetchMTGOTradesByDate,
  editMTGOTrade,
  deleteMTGOTrade,
  fetchOneMTGOTrade,
};
