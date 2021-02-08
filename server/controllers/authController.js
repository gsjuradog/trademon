const db = require('../models/index');
const bcrypt = require('bcrypt');
const services = require('../services/services');

exports.signin = async (req, res) => {
  try {
    console.log(' ♛ A User Requested Sign In ♛ ');
    const { email, password } = req.body;
    const filter = { where: { email: email } };
    let user = await db.UserData.findOne(filter);
    let result = '';
    if (user !== null) {
      const validPass = await bcrypt.compare(password, user.hashed);
      if (validPass) {
        let token = services.keyGen(15);
        await db.userTokens.destroy({ where: { id: user.id } }); //delete Old tokens
        user = user.dataValues;
        const newToken = await db.userTokens.create({ id: user.id, token });
        delete user.hashed;
        result = { token: newToken.token, ...user };
      } else result = { error: 'One of your credentials is incorrect!' };
    } else result = { error: 'One of your credentials is incorrect!' };
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.createUser = async (req, res) => {
  try {
    console.log('♛ A User Requested Sign Up ♛');
    const { username, email, password } = req.body;
    const filter1 = { where: { username: username } };
    const filter2 = { where: { email: email } };
    const userCheck = await db.UserData.findOne(filter1);
    const emailCheck = await db.UserData.findOne(filter2);
    let result = '';
    if (userCheck === null && emailCheck === null) {
      const hashedPass = await bcrypt.hash(password, 10);

      const newUser = await db.UserData.create({
        email: email,
        username: username,
        hashed: hashedPass,
      });
      let token = services.keyGen(15);
      const newToken = await db.userTokens.create({ id: newUser.id, token });
      const cloneUser = Object.assign({}, newUser);
      delete cloneUser.dataValues.hashed;
      result = { token: newToken.token, ...cloneUser.dataValues };
    } else {
      if (userCheck !== null || emailCheck !== null) {
        result = { error: 'Credentials are already in use!' };
      }
    }
    res.status(200).send(result);
  } catch (err) {
    console.log('Create Acc ERROR', err);
    res.status(500).send('POST ERROR');
  }
};

exports.getPublicDetails = async (req, res) => {
  try {
    const { id, token } = req.headers;
    let tokenValid;
    if (token) {
      tokenValid = await services.checkToken(id, token);
    }
    let reply = '';
    if (tokenValid === true || process.env.IS_PRODUCTION === 'false') {
      const { id } = req.body;
      const filter = { where: { id: id } };
      let user = await db.UserData.findOne(filter);
      reply = {
        email: user.email,
        username: user.username,
        trainerID: user.trainerID,
        trainerName:  user.trainerName,
        mtgoID:  user.mtgoID,
        mtgoName:  user.mtgoName,
        buyerRating:  user.buyerRating,
        sellerRating:  user.sellerRating,
        sales: user.transactionSales.length,
        purchases:user.transactionPurchases.length,
        trades: user.transactionTrades.length
      }
    }
    res.status(200).send(reply);
  } catch (error) {
    console.log('POST ERROR', error);
    res.status(500).send('POST ERROR');
  }
};

exports.uploadAvatar = async (req, res) => {
  try {
    const { userId, avatarUrl } = req.body;
    await db.UserData.update({avatarUrl:avatarUrl}, 
      { where : {
        id: userId
      }
    });
    console.log('AVATAR UPLOAD LINK: ', avatarUrl);
    res.status(201);
  } catch (error) {
    console.log('AVATAR UPLOAD ERROR', error);
    res.status(500).send('AVATAR UPLOAD ERROR');
  }
}