const db = require('../models/index');

const createTrade = async (req, res) => {
  //check if it is magic or pokemon and do one action or the other
  /*if (req.body.pokeName) { do pokemon  } else {magic} */
  try {
    console.log('A User Is Creating An Offer! ');
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
      catchLocation, //<--Also on req.body
      listingType, //<--Also on req.body
    } = req.body;

    console.log(seller);
    const reply = await db.PokeTradeData.create({
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
    } = req.body;
    const filter = { where: { id: id } };
    const reply = await db.PokeTradeData.findOne(filter);
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
    const { id } = await req.body;
    const reply = await db.PokeTradeData.findOne({
      where: { id: id },
    });
    if (reply) {
      const deleted = await db.PokeTradeData.destroy({
        where: { id: id },
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
  fetchOneTrade,
  fetchTradesByDate,
  editTrade,
  deleteTrade,
};
