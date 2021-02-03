const db = require('../models/index');
const bcrypt    = require('bcrypt')
const services = require('../services/services');

exports.signin = async (req, res) => {
  try {
    console.log(' ♛ A User Requested Sign In ♛ ');
    const { email, password } = req.body;
    const filter = {where: {email: email }};
    const user = await db.userCredentials.findOne(filter);
    let result = '';
    if ( user !== null) {
      const validPass = await bcrypt.compare(password, user.hashed)
      if ( validPass ) {
        let token = services.keyGen(15);
        const deleteOldTokens = await db.userTokens.destroy(filter)
        const newToken = await db.userTokens.create({ email, token });
        const userSave = await db.UserData.findOne({username: user.username})
        result = {
          success:        token, 
          email:          user.email, 
          username:       user.username, 
          trainerID:      userSave.trainerID,
          trainerName:    userSave.trainerName,
          mtgoId:         userSave.mtgoId,
          mtgoName:       userSave.mtgoName,
          buyerRating:    userSave.buyerRating,
          numBuyRatings:  userSave.numBuyRatings,
          sellerRating:   userSave.sellerRating,
          numSellRatings: userSave.numSellRatings,
          numOfStrikes:   userSave.numOfStrikes
        }
      }
      else result = {error: 'One of your credentials is incorrect!'};
    } else result = {error: 'One of your credentials is incorrect!'};
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
    const filter1 =  {where: {username: username }};
    const filter2 =  {where: {email: email }};
    const userCheck = await db.userCredentials.findOne(filter1);
    const emailCheck = await db.userCredentials.findOne(filter2);
    let result = '';
    if (userCheck === null  && emailCheck === null) {
      const hashed = await bcrypt.hash(password, 10);
      const newUser = db.userCredentials.create({ 
        email: email, 
        username:username, 
        hashed: hashed 
      });
      const storeSave = db.UserData.create({ 
        username: username,
        numBuyRatings: 0,
        numSellRatings: 0,
        numOfStrikes: 0,
      })
      result = {success: 'User created'}
    } else {
      if (userCheck !== null) result = {error: 'Username is taken'};
      if (emailCheck !== null) result = {error: 'Account exists with this email'};
    }
    res.status(200).send(result);
  } catch (err) {
    console.log('Create Acc ERROR', err);
    res.status(500).send('POST ERROR');
  }
};
