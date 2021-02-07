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

  test: () => {
    return "Test";
  }
};

//Resolvers for GraphQL Queries
const getUser = async (user) => {
  const reply = await db.UserData.findOne({
    where: {
      id: user,
    },
  });
  return reply;
};

const getChat = async (chatId) => {
  const reply = await db.Message.findAll({
    where: {
      PrivateChatId: chatId,
    },
  });
  return reply;
};


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
    const { id } = args;
    const reply = await db.PrivateChat.findAll({
        where : {
          id: id
        } 
        // [Op.or]: [
        //   {seller: username},
        //   {buyer: username}
        //]
      }); 
    return reply;
  }
};

const PrivateChat = {
  createdAt: async (args) => {
    const { id } = args;
    const reply = await db.PrivateChat.findOne({
      where: {
        id:id
      }
    });
    const createdAt = moment(id.createdAt).format('MMMM Do YYYY, h:mm a');
    return createdAt;
  },
  history: async (args) => {
    const { id } = args;
    const reply = await db.Message.findAll({
      where: {
        PrivateChatId: id
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


module.exports = { Query, 
                   Mutation,
                   UserData, 
                   PrivateChat, 
                   Message};
