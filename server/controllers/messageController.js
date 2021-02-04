const db = require('../models/index');

const postMessage = async (req, res) => {
  try {
    console.log('POST');
    const { from, to, content, chatID } = req.body;
    console.log(from, to, content, chatID);
    const reply = await db.Message.create({
      from: from,
      to: to,
      content: content,
      chatId: chatID,
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
  postMessage,
};
