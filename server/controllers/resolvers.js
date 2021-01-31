const db = require('../models/index');

const testObj = {
  username: 'Pikachu',
  trainerID: 4654654,
  trainerName: 'Bernie',
  mtgoID: 'ghfghfghgh',
  mtgoName: 'ghfghdfhgfghh',
  latitude: 46546,
  longitude: 4546,
  buyerRating: 0,
  numBuyRatings: 0,
  sellerRating: 0,
  numSellRatings: 0,
  numOfStrikes: 1,
};

// query ($user: String!){
//   getUserData(user: $user) {
//     numOfStrikes
//     trainerID
//     username {
//       username 
//     }
//   }
// }

// Query Variable: { "user": "Dan"}

//GraphQL Queries
const Query = {
  getUserData: (root, args, context) => {
    const { user } = args;
    const query = getUser(user);
    return query;
  },

  getPrivateChat: (root, args, context ) => {
    const { chatID } = args;
    const query = getChat(chatID);
    return query;
  },

  getTrade: (root, args, context) => {
    const { trade } = args;
    const query = getTrade(trade);
    return query;
  }

};

//Resolvers for GraphQL Queries
const getUser = async (user) => {
  const reply = await db.UserData.findOne({where: {
    username:user
  }});
  return reply;
}

const getChat = async (chat) => {
  //chat database interaction
  return 'Chat history';
}

const getTrade = async (trade) => {
  //trade database interaction
  return 'Trade'
}

//GraphQL Mutations
const Mutation = {
  editUser: (root, args, context) => {
    return 'edit user';
  },
};

//Resolvers for GraphQL Mutations


//Type Resolvers
const UserData = {
  username: (username) => {return username}
  //need to define privatechat resolver
}

const PrivateChat = {
  //need to define history resolver
}

const Message = {
  //need to define from & to resolvers
}

const Trade = {
  //need to define tradeItemVariableData resolver
  //need to define offerItemVariableData resolver
}



module.exports = { Query, Mutation, UserData, PrivateChat, Message, Trade };
