const db = require('../models/index');

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

  getPrivateChat: (root, args, context) => {
    const { chatID } = args;
    const query = getChat(chatID);
    return query;
  },

  getTrade: (root, args, context) => {
    const { tradeID } = args;
    const query = getTrade(trade);
    return query;
  },
};

//Resolvers for GraphQL Queries
const getUser = async (user) => {
  const reply = await db.UserData.findOne({
    where: {
      username: user,
    },
  });
  return reply;
};

const getChat = async (chatID) => {
  const reply = await db.PrivateChat.findOne({
    where: {
      chatID: chatID,
    },
  });
  return reply;
};

const getTrade = async (trade) => {
  const reply = await db.TradeData.findOne({
    where: {
      tradeID: tradeID,
    },
  });
  return 'Trade';
};

//GraphQL Mutations
const Mutation = {
  editUser: (root, args, context) => {
    return 'edit user';
  },
};

//Resolvers for GraphQL Mutations

//Type Resolvers
const UserData = {
  username: (username) => {
    return username;
  },
  privateChat: async (username) => {
    const reply = await db.PrivateChat.findAll({
      where: {
        seller: username,
        buyer: username,
      },
    });
    return reply;
  },
};

const PrivateChat = {
  history: async (chatID) => {
    const reply = await db.Message.findAll({
      where: {
        chatID: chatID,
      },
    });
    return reply;
  },
};

const Message = {
  from: async (messageID) => {
    const reply = await db.Message.findOne({
      where: {
        messageID: messageID,
      },
    });
    return reply.from;
  },
  to: async (messageID) => {
    const reply = await db.Message.findOne({
      where: {
        messageID: messageID,
      },
    });
    return reply.to;
  },
};

const Trade = {
  //need to define tradeItemVariableData resolver
  //need to define offerItemVariableData resolver
};

module.exports = { Query, Mutation, UserData, PrivateChat, Message, Trade };
