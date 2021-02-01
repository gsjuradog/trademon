const db = require('../models/index');

const createChat = async (req, res) => {
  try {
    console.log('CHAT POST');
    const { seller, buyer, history, comment } = req.body;
    console.log(seller, buyer, comment);

    const reply = await db.PrivateChats.create({
      buyer: buyer,
      seller: seller,
      history: history,
    });
    const message = await db.Message.create({
      from: buyer,
      to: seller,
      content: comment,
      chatID: reply.chatId,
    });
    res.status(200).send(reply);
  } catch (err) {
    console.log('POST ERROR', err);
    res.status(500).send(`POST ERROR: ${err}`);
  }
};

module.exports = {
  createChat,
};
