const db = require('../models/index');

const postMessage = async (req, res) => {
  try {
    console.log('POST');
    const { from, to, content, chatID } = req.body;
    console.log(from, to, content);
    const reply = await db.Message.create({
      from: from,
      to: to,
      content: content,
      chatID: chatID,
    });
    res.status(200).send(reply);
  } catch (err) {
    console.log('POST ERROR', err);
    res.status(500).send('POST ERROR');
  }
};

module.exports = {
  postMessage,
};
