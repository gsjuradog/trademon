const db = require('../models/index');
const services = require('../services/services');
const createTrade = async (req, res) => {
  try {
    console.log('A User Is Creating An Offer! ', req.headers.token);
    const { id, token } = req.headers;
    const tokenValid = await services.checkToken(id, token);
    let reply = '';
    if (tokenValid === true) {
      const {
        numViews,
        seller,
        pokeNum,
        pokeName,
        pokeGen,
        pokeLvl,
        pokeSprite,
        fastMove,
        chargeMove,
        isShiny,
        appraisal,
        price,
        tax,
        catchLocation,
        listingType,
      } = req.body;
      reply = await db.PokeTradeData.create({
        numViews,
        seller,
        pokeNum,
        pokeName,
        pokeGen,
        pokeLvl,
        pokeSprite,
        fastMove,
        chargeMove,
        isShiny,
        appraisal,
        price,
        tax,
        catchLocation,
        listingType,
        UserDatumId: id,
      });
    } else reply = { error: 'User not authorized to make this request.' };
    res.status(200).send(reply);
  } catch (err) {
    console.log('POST ERROR', err);
    res.status(500).send('POST ERROR');
  }
};

const fetchTrades = async (req, res) => {
  try {
    console.log('Someone Requested Active Trades!');
    const reply = await db.PokeTradeData.findAll();
    res.status(200).send(reply);
  } catch (err) {
    console.log('FETCH ERROR', err);
    res.status(500).send('FETCH ERROR');
  }
};

const fetchOneTrade = async (req, res) => {
  try {
    console.log('Someone Requested Trade Details!');
    const { id } = req.body;
    const filter = { where: { id: id } };
    const reply = await db.PokeTradeData.findOne(filter);
    res.status(200).send(reply);
  } catch (err) {
    console.log('FETCH ERROR', err);
    res.status(500).send('FETCH ERROR');
  }
};

const fetchTradesByDate = async (req, res) => {
  try {
    console.log('Showing recent Trades!');
    const reply = await db.PokeTradeData.findAll({
      limit: 8,
      order: [['createdAt', 'DESC']],
    });
    res.status(200).send(reply);
  } catch (err) {
    console.log('FETCH ERROR', err);
    res.status(500).send('FETCH ERROR IN TRADES BY DATE');
  }
};

const editTrade = async (req, res) => {
  try {
    console.log('A User Is Editing An Offer!');
    const { id, token } = req.headers;
    const tokenValid = await services.checkToken(id, token);
    let reply;
    if (tokenValid === true) {
      const {
        id,
        numViews,
        seller,
        pokeNum,
        pokeName,
        pokeGen,
        pokeLvl,
        fastMove,
        chargeMove,
        isShiny,
        appraisal,
        price,
        tax,
        catchLocation,
        listingType,
      } = req.body;
      const filter = { where: { id: id } };
      reply = await db.PokeTradeData.findOne(filter);
      //Check if record exists in db
      if (reply) {
        reply.update({
          numViews,
          seller,
          pokeNum,
          pokeName,
          pokeGen,
          pokeLvl,
          fastMove,
          chargeMove,
          isShiny,
          appraisal,
          price,
          tax,
          catchLocation,
          listingType,
        });
      } else reply = { error: 'User not authorized to make this request.' };
    }
    res.status(200).send(reply);
  } catch (err) {
    console.log('POST ERROR', err);
    res.status(500).send('POST ERROR');
  }
};

const deleteTrade = async (req, res) => {
  try {
    console.log(req.body);
    const { id, token } = req.headers;
    const tokenValid = await services.checkToken(id, token);
    let reply;
    if (tokenValid === true) {
      const { id } = await req.body;
      const filter = { where: { id: id } };
      reply = await db.PokeTradeData.findOne(filter);
      if (reply) {
        await db.PokeTradeData.destroy(filter);
      }
    } else reply = { error: 'User not authorized to make this request.' };
    res.status(200).send(reply);
  } catch (error) {
    console.log('No Trade With That ID Found', err);
    res.status(500).send('DELETE ERROR');
  }
};

module.exports = {
  createTrade,
  fetchTrades,
  fetchOneTrade,
  fetchTradesByDate,
  editTrade,
  deleteTrade,
};
