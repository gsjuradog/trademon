const db = require('../models/index');
const { Op } = require('sequelize');
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

const getAllChatsForUser = async (req, res) => {
  try {
    const { userId } = req.body;
    const foundChats = await db.PrivateChat.findAll({
      where: {
        users: { [Op.contains]: [userId] }
      },
    });
    console.log('Did we find the right chats? ',foundChats);
    res.status(200).send(foundChats);
  } catch (err){
    console.log('GET ERROR', err);
    res.status(500).send(`GET ERROR: ${err}`);
  }
}

const getChat = async (req, res) => {
  try {
    const { chatId } = req.body;
    let reply = 'NoMessages';
    if (chatIdFound !== undefined) {
      reply = await db.Message.findAll({
        where: {
          PrivateChatId: chatId,
        },
      });
    }
    res.status(200).send(reply);
  } catch (err) {
    console.log('GET ERROR', err);
    res.status(500).send(`GET ERROR: ${err}`);
  }
};

module.exports = {
  createChat,
  getAllChatsForUser,
  getChat,
};
