const db = require('../models/index');

const createChat = async (req, res) => {
  try {
    const { seller, buyer } = req.body;
    const reply = await db.PrivateChat.create({
      users: [buyer, seller],
    });
    res.status(200).send(reply);
  } catch (err) {
    console.log('POST ERROR', err);
    res.status(500).send(`POST ERROR: ${err}`);
  }
};

const getChat = async (req, res) => {
  try {
    const { id } = req.params;
    const reply = await db.Message.findAll({
      where: {
        chatID: id,
      },
    });
    res.status(200).send(reply);
  } catch (err) {
    console.log('GET ERROR', err);
    res.status(500).send(`GET ERROR: ${err}`);
  }
};

module.exports = {
  createChat,
  getChat,
};
