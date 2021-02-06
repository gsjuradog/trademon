const db = require('../models/index');

const sendMessage = async (req, res) => {
  try {
    console.log('POST');
    const { sender, content, PrivateChatId } = req.body;
    console.log(content, sender);
    const reply = await db.Message.create({
      sender,
      content: content,
      PrivateChatId,
    });
    // const chat = await db.PrivateChats.findOne({
    //   where: {
    //     chatID: chatID
    //   },
    //   //chat.dataValues.history = [...chat.dataValues.history, reply.messageID]
    // });
    // console.log(reply.messageID);
    // console.log(chat.dataValues.history);
    // await chat.save();
    res.status(200).send(reply);
  } catch (err) {
    console.log('POST ERROR', err);
    res.status(500).send('POST ERROR');
  }
};

module.exports = {
  sendMessage,
};
