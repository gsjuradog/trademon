const endpointURL : string = 'https://trademon.herokuapp.com/graphql' || 'http://localhost:3001/graphql';

/*
GraphQL Endpoint fetch factory - takes a GraphQL query, and an optional GraphQL variables object
*/
async function graphqlRequest(query: String, variables={}) {

  const request = {
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  };

  const response = await fetch(endpointURL, request)
  const responseBody = await response.json();
  return responseBody.data;

}

//Returns userData by UserID - not getting buyerRating / sellerRating yet, weird datatype in Postgres...
export async function getUser(user: Number) {
  //1. Define query
  const query = `
  query ($user: Int!) {
    getUserData(user: $user) {
      id
      email
      username
      trainerID
      trainerName
      mtgoID
      mtgoName
      numOfStrikes
      privateChat {
          id
          users
          createdAt
          history {
            id
            sender
            content
            publishDate
          }
      }
    }
  }
  `;
  const data = await graphqlRequest(query, {user:user}); //<--2. Call fetch factory with query variables
  return data; //<-- 3. Return result
}

//Gets a private chat and all nested messages via PrivateChatId
export async function getPrivateChats(chatID:Number) {
  const query = `
  query ($chatID: Int!){
    getPrivateChat(chatID:$chatID) {
      id
      sender
      content
      publishDate
    }
  }
  `;
  const data = await graphqlRequest(query, {chatID:chatID});
  return data;
}

// export async function getTrade() {
  
// }