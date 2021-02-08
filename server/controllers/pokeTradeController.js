const db = require('../models/index');
const services = require('../services/services');
const {Sequelize} = require('sequelize');
const createTrade = async (req, res) => {
  try {
    console.log('A User Is Creating An Offer! ');
    const { id, token } = req.headers;
    let tokenValid;
    if (token) {
      tokenValid = await services.checkToken(id, token);
    }
    let reply = ''; 
    if (tokenValid === true || process.env.IS_PRODUCTION === 'false') {
      const {
        numViews,
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
      const sellerUserName= await db.UserData.findOne({where :{id:id}})
      
      reply = await db.PokeTradeData.create({
        numViews,
        seller:sellerUserName.dataValues.username,
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
    let tokenValid;
    if (token) {
      tokenValid = await services.checkToken(id, token);
    }
    let reply = '';
    if (tokenValid === true || process.env.IS_PRODUCTION === 'false') {
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
    let tokenValid;
    if (token) {
      tokenValid = await services.checkToken(id, token);
    }
    let reply = '';
    if (tokenValid === true || process.env.IS_PRODUCTION === 'false') {
      const { id } = await req.body;
      const filter = { where: { id: id } };
      reply = await db.PokeTradeData.findOne(filter);
      if (reply) {
        await db.PokeTradeData.destroy(filter);
      }
    } else reply = { error: 'User not authorized to make this request.' };
    res.status(200).send(reply);
  } catch (error) {
    console.log('No Trade With That ID Found', error);
    res.status(500).send('DELETE ERROR');
  }
};

const addToWatchlist = async (req, res) => {
  try {
    console.log('here is the addtolist in the server')
    const { id, token } = req.headers;
    let tokenValid;
    if (token) {
      tokenValid = await services.checkToken(id, token);
    }
    let reply = '';
    let result = '';
    if (tokenValid === true || process.env.IS_PRODUCTION === 'false') {
      const { id, tradeId } = await req.body;
      const filter = { where: { id: id } };
      reply = await db.UserData.findOne(filter);
      const existsInWatchList = reply.watchList.includes(tradeId)//true or false
      
      if (existsInWatchList){
        // reply = {'error':'Object is already in list'};
        await reply.update({watchList: Sequelize.fn('array_remove', Sequelize.col('watchList'), tradeId)})
        const cloneReply = Object.assign({}, reply); 
        delete cloneReply.dataValues.hashed;

        reply = cloneReply.dataValues;
      } else if (reply) {
        await reply.update({watchList: Sequelize.fn('array_append', Sequelize.col('watchList'), tradeId)});
        const cloneReply = Object.assign({}, reply);
        delete cloneReply.dataValues.hashed;
        reply = cloneReply.dataValues;
        
      }  
    } else reply = { error: 'User not authorized to make this request.' }; 
    res.status(200).send(reply);
  } catch (err) {
    console.log('No Trade With That ID Found',err);
    res.status(500).send('Add To Watchlist ERROR'); 
  }
}
  
module.exports = {
  createTrade, 
  fetchTrades,
  fetchOneTrade,
  fetchTradesByDate,
  editTrade,
  deleteTrade,
  addToWatchlist
};
