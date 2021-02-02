const endpointURL : any = 'http://localhost:3001/graphql';

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

//getUser data - query not working atm due to db refactor
export async function getUser(user:String) {
  //1. Define query
  const query = `
  query ($user: String!){
    getUserData(user: $user) {
      trainerID
      id
      buyerRating
    }
  }
  `;
  const data = await graphqlRequest(query, {user:user}); //<--2. Call fetch factory with query variables
  return data; //<-- 3. Return result
}

//getPrivateChat - working
export async function getPrivateChat(chatID:Number) {
  const query = `
  query ($chatID: Int!){
    getPrivateChat(chatID:$chatID) {
      id
      seller {
        username
      }
      buyer {
        username
      }
    }
  }
  `;
  const data = await graphqlRequest(query, {chatID:chatID});
  return data;
}

export async function getTrade() {
  
}