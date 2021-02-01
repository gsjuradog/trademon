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

const getChat = async (chatID) => {
  const reply = await db.PrivateChat.findOne({
    where: {
      id: chatID,
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

// const getMessages = async (chatID) => {
//   const messages = await db.Message.findAll({ 
//     where: {
//       chatID: chatID
//     }
//   })
//   return messages;
// }

// const getAllChats = async (userID) => {
//   const user = await db.UserData.findOne({
//     where:{
//       userID:userID
//     }
//   });
//   return user.privatchat;
// }


//GraphQL Mutations
const Mutation = {
  editUser: (root, args, context) => {
    return 'edit user';
  },
};

//Resolvers for GraphQL Mutations


//Type Resolvers
const Username = {
  username: (username) => {
    return username;
  }
};

const Date = {
  date: (date) => {
    return date;
  }
};

const UserData = {
  //args is the type passed in
  username: (args) => {
    return args.username;
  },
  privateChat: async (args) => {
    const { username } = args;
    const reply = await db.PrivateChat.findAll({
      where: {
        seller: username,
        buyer: username
      },
    });
    return reply;
  },
};

const PrivateChat = {
  seller: async (args) => {
    const { id } = args;
    const reply = await db.PrivateChat.findOne({
      where: {
        id:id
      }
    });
    console.log(reply.dataValues.seller);
    return reply.seller;
  },
  buyer: async (args) => {
    const { id } = args;
    const reply = await db.PrivateChat.findOne({
      where: {
        id:id
      }
    });
    return reply.buyer;
  },
  history: async (args) => {
    const { id } = args;
    const reply = await db.Message.findAll({
      where: {
        id:id  //No chatID property in Messages table
      },
    });
    return reply;
  },
};

const Message = {
  from: async (args) => {
    const { messageID } = args;
    const reply = await db.Message.findOne({
      where: {
        messageID: messageID,
      },
    });
    return reply.from;
  },
  to: async (args) => {
    const { messageID } = args;
    const reply = await db.Message.findOne({
      where: {
        messageID: messageID,
      },
    });
    return reply.to;
  },
};


const Trade = {
  //
  //need to define tradeItemVariableData resolver
  //need to define offerItemVariableData resolver
};


module.exports = { Query, Mutation, Username, UserData, PrivateChat, Message, Trade };
