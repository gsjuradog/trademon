const moment = require('moment');

const db = require('../models/index');
const { Op } = require('sequelize');


//Example query
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
    const query = getTrade(tradeID);
    return query;
  },

  test: () => {
    return "Test";
  }
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

const getChat = async (chatId) => {
  const reply = await db.Message.findAll({
    where: {
      chatId: chatId,
    },
  });
  return reply;
};

// const getTrade = async (trade) => {
//   const reply = await db.TradeData.findOne({
//     where: {
//       tradeID: tradeID,
//     },
//   });
//   return 'Trade';
// };

//GraphQL Mutations
const Mutation = {
  editUser: (root, args, context) => {
    return 'edit user';
  },
};

//Resolvers for GraphQL Mutations

const UserData = {
  //args is the type passed in
  privateChat: async (args) => {
    const { username } = args;
    const reply = await db.PrivateChat.findAll({
      where: {
        [Op.or]: [
          {seller: username},
          {buyer: username}
        ]
      },
    });
    return reply;
  },
};

const PrivateChat = {
  history: async (args) => {
    const { id } = args;
    console.log('id', id);
    const reply = await db.Message.findAll({
      where: {
        chatId: id
      }
    });
    return reply;
  }
};

const Message = {
  publishDate: (args) => {
    const reply = moment(args).format('MMMM Do YYYY, h:mm a');
    return reply;
  }
}

const Trade = {
  //
  //need to define tradeItemVariableData resolver
  //need to define offerItemVariableData resolver
};


module.exports = { Query, 
                   Mutation,
                   UserData, 
                   PrivateChat, 
                   Message,
                   Trade };
