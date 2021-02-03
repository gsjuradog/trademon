const  db = require('../models/index');

const getUser = async (req, res) => {
  try {
    console.log('GET');
    const reply = await db.Message.findAll()
    res.status(200).send(reply);
  } catch (err) {
    console.log('GET ERROR', err);
    res.status(500).send('GET ERROR');
  }
};

const postUser = async (req, res) => {
  try {
    console.log('POST');
    const { author, content } = req.body;
    console.log(author, content);
    const reply = await db.Message.create({
      author: author,
      content: content
    })
    res.status(200).send(reply);
  } catch (err) {}
  console.log('POST ERROR', err);
  res.status(500).send('POST ERROR');
};

module.exports = {
  getUser,
  postUser,
};
