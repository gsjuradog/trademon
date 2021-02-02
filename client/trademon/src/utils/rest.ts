const endpointURL : String = 'http://localhost:3001';

export const createUser = (userName: String, trainerID: String, trainerName: String) => {
  fetch(`${endpointURL}/createUser`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      userName, 
      trainerID, 
      trainerName
    })
  })
    .then(res => res.json)
    .then(data => console.log(data))
    .catch(err => console.log('CREATE USER ERROR', err))
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
return fetch(`${endpointURL}/fetchTrades`, {
  method: 'GET'})
  .then(res => res.status <= 400? res : Promise.reject(res))
  .then(res => res.json())
  .catch((err)=>{
    console.log(`${err} while fetching trades`)
  })
} 


export const createTrade = (
  numViews:number, 
  seller:string, 
  pokeNum:number, 
  pokeName:string, 
  pokeGen:number, 
  pokeLvl:number, 
  fastMove:string, 
  chargeMove:string, 
  isShiny:boolean ,
  appraisal:number, 
  price:number, 
  tax:number
  ) => {
  fetch(`${endpointURL}/createTrade`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      numViews, 
      seller, 
      pokeNum, 
      pokeName, 
      pokeGen, 
      pokeLvl, 
      fastMove, 
      chargeMove, 
      isShiny, 
      appraisal, 
      price, 
      tax,//do we need tax here?
    })
  })
    .then(res => res.json)
    .then(data => console.log(data))
    .catch(err => console.log('CREATE TRADE ERROR', err))
}