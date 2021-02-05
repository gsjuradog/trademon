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
        await db.userTokens.destroy(filter); //delete Old tokens
        const newToken = await db.userTokens.create({ email, token });
        user = user.dataValues;
        delete user.hashed;
        result = {
          success: newToken,
          user,
        };
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

      const cloneUser = Object.assign({}, newUser);
      delete cloneUser.dataValues.hashed;
      result = cloneUser.dataValues;
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
