const db = require('../models/index');
//
const createChat = async (req, res) => {
  try {
    const { seller, buyer, itemId, message } = req.body;

    const reply = await db.PrivateChat.create({
      users: [buyer, seller],
      itemId,
    });
    await db.Message.create({
      sender: buyer,
      content: message,
      PrivateChatId: reply.id,
    });
    res.status(200).send(reply);
  } catch (err) {
    console.log('POST ERROR', err);
    res.status(500).send(`POST ERROR: ${err}`);
  }
};

const getChat = async (req, res) => {
  try {
    const { itemId, buyer, seller } = req.body;
    const foundChats = await db.PrivateChat.findAll({
      where: {
        itemId,
      },
    });
    let chatIdFound;
    foundChats.forEach((chat) => {
      if (
        chat.dataValues.users.includes(buyer) &&
        chat.dataValues.users.includes(seller)
      ) {
        chatIdFound = chat.dataValues.id;
      }
    });
    const reply = await db.Message.findAll({
      where: {
        PrivateChatId: chatIdFound,
      },
    });
    console.log('Resulting messages from getChat: ', reply);
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
