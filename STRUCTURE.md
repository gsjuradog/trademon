# Initial Folder Structure

## Client

### Maybe looks like a lot of folders, but allows an obvious seperation of what does what.

---

```bash
Components  #React Components
    -> ReactComponent1
          -> component.ts
          -> component.scss
    -> ReactComponent2
          -> component.ts
          -> component.scss
    -> ...
Services   #Front End Services
    -> apiService.ts
    -> auth.ts
    -> etc...
Redux     #Redux State Store Setup
    -> Actions
      -> action1.ts
      -> action2.ts
      -> etc...
    -> Reducers
      -> index.ts
      -> reducer1.ts
      -> reducer2.ts
      -> etc...
GraphQL  #Graphql Front End (Factory)
    -> graphql.ts
    -> query1.ts
    -> query2.ts
    -> etc...
Interfaces  #TypeScript Interfaces
    -> interface1.ts
    -> interface2.ts
    -> etc...
Styles     #Sass Folder
    -> _config.scss
    -> _flex.scss
    -> etc...
```

- Sass files in folders with their own React component, makes it easy to locally scope styles if we have a consistent convention for naming the component containers

- Redux is set up so that we have a seperation of the actions (what we pass to the store) and reducers (how we want to change the state)

- GraphQL is set up so we have a common factory function inside graphql.ts making the fetch requests, and can define specific queries in seperate files (easy to add custom queries)

- Sass is set up so it can find its config (global variables we might want etc etc), and other useful modules (flex row center, flex column center etc) we can then import

## Server

---

```bash
server.js  #Apollo config + /graphql route in here
routes.js  #REST routes
schema.graphql # GraphQL schemas
Models
    -> model1.ts
    -> model2.ts
    -> ...
Views
Controllers
    -> item.resolvers.ts  #If graphql
    -> item.controller.ts #If REST
    -> ...
```

- Apollo server on top of Express config and GraphQl endpoint in server.js
- GraphQL resolvers in the Controllers folder
- Interface with the DB via the models in the normal way
