const db = require('../models/index');

const createTrade = async (req, res) => {
  //check if it is magic or pokemon and do one action or the other
  /*if (req.body.pokeName) { do pokemon  } else {magic} */
  try {
    console.log('A User Is Creating An Offer! ', req.body.pokeSprite);
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
      catchLocation,  //<--Also on req.body
      listingType     //<--Also on req.body
    } = req.body;

    console.log(seller);
    const reply = await db.TradeData.create({
      numViews: numViews,
      seller: seller,
      pokeNum: pokeNum,
      pokeName: pokeName,
      pokeGen: pokeGen,
      pokeLvl: pokeLvl,
      pokeSprite: pokeSprite,
      fastMove: fastMove,
      chargeMove: chargeMove,
      isShiny: isShiny,
      appraisal: appraisal,
      price: price,
      tax: tax,
    });
    console.log('WHAT IS RESULT: ', reply.dataValues);
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

const fetchTradesByDate = async (req, res) => {
  try {
    console.log('Showing recent Trades!');
    const reply = await db.TradeData.findAll({
      limit: 2,
      order: [['publishDate', 'DESC']],
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
    const {
      tradeID,
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
    const filter = { where: { tradeID: tradeID } };
    const reply = await db.TradeData.findOne(filter);
    //Check if record exists in db
    if (reply) {
      reply.update({
        numViews: numViews,
        seller: seller,
        pokeNum: pokeNum,
        pokeName: pokeName,
        pokeGen: pokeGen,
        pokeLvl: pokeLvl,
        fastMove: fastMove,
        chargeMove: chargeMove,
        isShiny: isShiny,
        appraisal: appraisal,
        price: price,
        tax: tax,
      });
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
    const { tradeID } = await req.body;
    const reply = await db.TradeData.findOne({ where: { tradeID: tradeID } });
    if (reply) {
      const deleted = await db.TradeData.destroy({
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
  createTrade,
  fetchTrades,
  fetchTradesByDate,
  editTrade,
  deleteTrade,
};
