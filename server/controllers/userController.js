const  db = require('../models/index');

const createUser = async (req, res) => {
  try {
    console.log('POST');
    const { username, trainerID, trainerName } = req.body;
    console.log(username, trainerID, trainerName );
    const reply = await db.UserData.create({
      username: username,
      //trainerID: trainerID,
      //trainerName: trainerName
    })
    res.status(200).send(reply);
  } catch (err) {
    console.log('POST ERROR', err);
    res.status(500).send('POST ERROR');
  }
}

module.exports = {
  createUser
}