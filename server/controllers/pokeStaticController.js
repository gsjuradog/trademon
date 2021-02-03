const db = require('../models/index');

exports.fetchStaticPoke = async (req, res) => {
  try {
    console.log('Someone Requested StaticPoke!');
    const { name } = req.body;
    const filter = {where: {name: name }};
    const reply = await db.pokeStatic.findOne(filter);
    res.status(200).send(reply);
  } catch (err) {
    console.log('FETCH ERROR', err);
    res.status(500).send('FETCH ERROR');
  }
};