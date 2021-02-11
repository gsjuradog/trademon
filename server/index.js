const fs = require('fs');
const express = require('express');
const app = express();
const cors = require('cors');
// -------------------- SocketIO
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
  },
});
const util = require('util');

// -------------------- Default Rest & Express
const db = require('./models/index');
require('dotenv').config();
const router = require('./routes');
const PORT = process.env.PORT || process.env.PORTLOCAL || 3001;
app.use(cors(), express.json(), router);

// -------------------- GraphQL
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = gql(
  fs.readFileSync(__dirname + '/schema.graphql', { encoding: 'utf8' }),
);
const resolvers = require('./controllers/resolvers');
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: '/graphql' });
const moment = require('moment');

const users = {};

// -------------------- SocketIO
const clients = []; // track connected clients
io.on('connection', (socket) => {
  // clients.push(socket.id);
  console.log('Connection: socket id: ', socket.id);

  // ----------------------------------------------
  // video stuff
  if (!users[socket.id]) {
    users[socket.id] = socket.id;
  }
  socket.emit('yourID', socket.id);
  io.sockets.emit('allUsers', users);
  socket.on('disconnect', () => {
    delete users[socket.id];
  });

  socket.on('callUser', (data) => {
    io.to(data.userToCall).emit('hey', {
      signal: data.signalData,
      from: data.from,
    });
  });

  socket.on('acceptCall', (data) => {
    io.to(data.to).emit('callAccepted', data.signal);
  });
  // ----------------------------------------------

  // Welcome Current User & track connected clients via log
  // clients.push(socket.id);
  // const clientConnectedMsg = {
  //   content: 'User joined the room',
  //   sender: 0,
  //   createdAt: moment(Date.now()).format('MMMM Do YYYY, h:mm a'),
  //   PrivateChatId: socket.id,
  // };
  // // Send a user who just joined a welcome message
  // socket.emit('newMessage', {
  //   content: 'Welcome To The Trade Room!',
  //   sender: 0,
  //   createdAt: moment(Date.now()).format('MMMM Do YYYY, h:mm a'),
  //   PrivateChatId: socket.id,
  // });
  // // Notifies all users that someone joined the room
  // socket.broadcast.emit('newMessage', clientConnectedMsg);
  // console.log(clientConnectedMsg);

  // //Listen for chat messages from users
  // socket.on('chatMessage', (msg) => {
  //   console.log('Server read chatMessage ', msg);
  //   const formattedDate = moment(msg.createdAt).format('MMMM Do YYYY, h:mm a');
  //   console.log('WHAT IS MOMENT ', formattedDate);
  //   const formattedMessage = {
  //     content: msg.content,
  //     sender: msg.sender,
  //     createdAt: formattedDate,
  //     PrivateChatId: msg.PrivateChatId,
  //   };
  //   io.emit('newMessage', formattedMessage);
  //   //socket.broadcast.emit('newMessage', msg);
  // });

  // //When client disconnects, handle it
  // socket.on('disconnect', () => {
  //   clients.pop(socket.id);
  //   const clientDisconnectedMsg =
  //     'User disconnected ' +
  //     util.inspect(socket.id) +
  //     ', total: ' +
  //     clients.length;
  //   io.emit(clientDisconnectedMsg);
  //   console.log(clientDisconnectedMsg);
  // });
});
// -------------------- Start Server Listening
(async () => {
  try {
    //await db.sequelize.sync({ force: true });
    //await db.sequelize.sync();
    http.listen(PORT);
    console.log(`Conected to DB, Server listening on port ${PORT}`); // eslint-disable-line no-console
  } catch (e) {
    console.error('Error connecting to the db', e); // eslint-disable-line no-console
  }
})();
