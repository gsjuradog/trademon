const db = require('../models/index');

const createTrade = async (req, res) => {
  try {
    console.log('TRADE POST');
    const { seller, tradeItemID } = req.body;
    console.log(seller, tradeItemID);
    const reply = await db.TradeData.create({
      seller: seller,
      tradeItemID: tradeItemID,
    });
    res.status(200).send(reply);
  } catch (err) {
    console.log('POST ERROR', err);
    res.status(500).send('POST ERROR');
  }
};

module.exports = {
  createTrade,
};
