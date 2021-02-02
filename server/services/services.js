const db = require('../models/index');

exports.keyGen = ( length ) => {
  let key = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    key += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return key;
}

exports.checkToken = async ( email, token ) => {
  let check = await db.userTokens.findOne({where: { email: email }});
  
  check = check[0];
  let result = '';
  if( check.email ) {
    if ( check.token === token ) {
      result = true
      
    }
    else result = false
  }
  else result = false
  return result;
}