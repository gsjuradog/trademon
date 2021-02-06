const fs = require('fs');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');

const db = require('./models/index');

require('dotenv').config();

const router = require('./routes');

const app = express();
const PORT = process.env.PORT || process.env.PORTLOCAL || 3001;
const HOST = 'localhost';
const test = process.env.HOST;
console.log(test);

app.use(cors(), express.json(), router);

const typeDefs = gql(
  fs.readFileSync(__dirname + '/schema.graphql', { encoding: 'utf8' }),
);
const resolvers = require('./controllers/resolvers');
//const context = ({ req }) => ({user: req.user});
//const apolloServer = new ApolloServer({typeDefs, resolvers, context});
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: '/graphql' });

(async () => {
  try {
    // await db.sequelize.sync({ force: true });
    await db.sequelize.sync();
    app.listen(PORT);
    console.log(`Conected to DB, Server listening on port ${PORT}`); // eslint-disable-line no-console
  } catch (e) {
    console.error('Error connecting to the db', e); // eslint-disable-line no-console
  }
})();
