const fs = require('fs');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');

const db = require('./models/index');

require('dotenv').config();

const router = require('./routes');

const app = express();
const PORT = 3000;
const HOST = 'localhost';

app.use(cors(), express.json(), router);

const typeDefs = gql(fs.readFileSync('./schema.graphql', { encoding: 'utf8' }));
const resolvers = require('./controllers/resolvers');
//const context = ({ req }) => ({user: req.user});
//const apolloServer = new ApolloServer({typeDefs, resolvers, context});
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: '/graphql' });

(async () =>{
  try {
    await db.sequelize.sync();
    app.listen(PORT);
    console.log(`Server listening on port ${PORT}`); // eslint-disable-line no-console
  } catch (e) {
    console.error('Error connecting to the db', e); // eslint-disable-line no-console
  }
})();
