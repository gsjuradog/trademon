const fs = require('fs'); 
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');

const app = express();
const PORT = 3000;
const HOST = 'localhost';

app.use(
  cors(),
  express.json()
);

const typeDefs = gql(fs.readFileSync('./schema.graphql', {encoding: 'utf8'}));
const resolvers = require('./controllers/resolvers');
//const context = ({ req }) => ({user: req.user});
//const apolloServer = new ApolloServer({typeDefs, resolvers, context});
const apolloServer = new ApolloServer({typeDefs, resolvers});
apolloServer.applyMiddleware({app, path: '/graphql'});

app.listen(PORT, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`)
})