const db = require('../models/index');

const createTrade = async (req, res) => {
  try {
    console.log('TRADE POST');
    const { 
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
    } = req.body;
    
    console.log(seller);
    const reply = await db.TradeData.create({
      numViews: numViews,
      seller:seller,
      pokeNum: pokeNum,
      pokeName: pokeName,
      pokeGen: pokeGen,
      pokeLvl: pokeLvl,
      fastMove: fastMove,
      chargeMove: chargeMove,
      isShiny: isShiny,
      appraisal: appraisal,
      price: price,
      tax: tax
    });
    res.status(200).send(reply);
  } catch (err) {
    console.log('POST ERROR', err);
    res.status(500).send('POST ERROR');
  }
};
const fetchTrades = async (req, res) => {
  try {
    console.log('Someone Requested Active Trades!');
    const reply = await db.TradeData.findAll();
    res.status(200).send(reply);
  } catch (err) {
    console.log('FETCH ERROR', err);
    res.status(500).send('FETCH ERROR');
  }
};


module.exports = {
  createTrade, fetchTrades
};
