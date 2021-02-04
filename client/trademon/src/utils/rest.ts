import { TradeData, Create, SignIn } from './interfaces'

const endpointURL : String = 'https://trademon.herokuapp.com' || 'http://localhost:3001';


export const createUser = async (user : Create) => {
  const { name, email, password } = user;

  return await fetch(`${endpointURL}/createUser`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      username: name, 
      email, 
      password
    })
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log('CREATE USER ERROR', err));
}

export const signInUser = async (user: SignIn) => {
  const { email, password } = user;
  
  return await fetch(`${endpointURL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      email, 
      password
    })
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log('SIGN IN USER ERROR', err))
}

export const createChat = (seller: String, buyer: String) => {
  fetch(`${endpointURL}/createChat`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      seller,
      buyer
    })
  })
    .then(res => res.json)
    .then(data => console.log(data))
    .catch(err => console.log('CREATE CHAT ERROR', err))
}

export const createMessage = (from: String, to: String, content: String, chatID: Number) => {
  fetch(`${endpointURL}/createMessage`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      from,
      to,
      content,
      chatID
    })
  })
    .then(res => res.json)
    .then(data => console.log(data))
    .catch(err => console.log('CREATE MESSAGE ERROR', err))
}

export const getTrades  = () => {
  console.log('URLLLLLLL   ',endpointURL);
  
return fetch(`${endpointURL}/fetchTrades`, {
  method: 'GET'})
  .then(res => res.status <= 400? res : Promise.reject(res))
  .then(res => res.json())
  .catch((err)=>{
    console.log(`${err} while fetching trades`)
  })
} 



export const createTrade = async (trade : TradeData) => {
  
  const {pokeName, CP, catchLocation, fastMove, chargeMove, shiny, price, appraisal, listingType } = trade;

  const pokeDetails = await getPoke(pokeName);

  const { id, generation, pokeSprite } : any = pokeDetails;

  fetch(`${endpointURL}/createTrade`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      numViews: 0,
      seller: 'ME',
      pokeNum: id,
      pokeName,
      pokeGen: generation,
      pokeLvl: CP,
      pokeSprite,
      fastMove,
      chargeMove,
      isShiny: shiny,
      appraisal,
      price,
      catchLocation,
      listingType,
      
    })
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log('CREATE TRADE ERROR', err))
}

const getPoke = async (name: string) => {

  let call = {};

  await fetch(`${endpointURL}/fetchStaticPoke`, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          name: name
        }) 
      }).then(res => res.json())
      .then(data => call = data)
      .catch(err => console.log('GETPOKE ERROR', err))

      return call;
}