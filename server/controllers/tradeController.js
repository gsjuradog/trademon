const db = require('../models/index');

const createTrade = async (req, res) => {
  try {
    console.log('TRADE POST');
    const { seller, tradeItemID } = req.body;
    console.log(seller, tradeItemID);
    // const reply = await db.UserData.create({
    //   username: username,
    //   trainerID: trainerID,
    //   trainerName: trainerName,
    // });
    res.status(200).send(reply);
  } catch (err) {
    console.log('POST ERROR', err);
    res.status(500).send('POST ERROR');
  }
};

module.exports = {
  createTrade,
};