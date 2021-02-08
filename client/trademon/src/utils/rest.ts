import { TradeData, Create, SignIn, MtgoTrades } from './interfaces'

const endpointURL : String = 'https://trademon.herokuapp.com' || 'http://localhost:4444';

const cloudName = 'dasb94yfb';
const avatarCloud = `https://api.cloudinary.com/v1_1/${cloudName}/`

export const createUser = async (user : Create) => {
  const { name, email, password } = user;

  let result = await fetch(`${endpointURL}/createUser`, {
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

    return result;
}

export const signInUser = async (user: SignIn) => {
  const { email, password } = user;

  let result = await fetch(`${endpointURL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      email: email, 
      password: password
    })
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log('SIGN IN USER ERROR', err))
    return result;
}


export const uploadAvatarCloud = async (user: number, avatar: any) => {

  const formData = new FormData();
  formData.append('file', avatar.files[0]);
  formData.append('upload_preset', 'ppgbubn6');

  let response;

  await fetch(avatarCloud + 'upload', {
    method: 'POST',
    body: formData,
  }).then(response => response.json())
    .then(data => response = data.url)
    .catch(err => console.log('Fetch error (CLOUDINARY)', err));

  return response;

}


export const uploadAvatarServer  = async (id:number, url: string) => {
  await fetch(`${endpointURL}/userAvatar`, {
    method: 'PUT',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      userId: id,
      avatarUrl: url
    })
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log('Fetch Error (avatar)', err));
  return;
}





export const createChat = async (seller: Number, buyer: Number, message: string) => {

  let result; 
  
  await fetch(`${endpointURL}/createChat`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      seller,
      buyer,
      message
    })
  })
    .then(res => res.json())
    .then(data => result = data)
    .catch(err => console.log('CREATE CHAT ERROR', err));

  return result;
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

export const getTrades = () => {
  return fetch(`${endpointURL}/fetchPokeTrades`, {
    method: 'GET'})
    .then(res => res.status <= 400? res : Promise.reject(res))
    .then(res => res.json())
    .catch((err)=>{
      console.log(`${err} while fetching trades`)
  })
};

export const getOnePokeTrade = (tradeID: Number) => {
  return fetch(`${endpointURL}/fetchOnePokeTrade`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      id: tradeID,
    })
  })
    .then(res => res.status <= 400? res : Promise.reject(res))
    .then(res => res.json())
    .catch((err)=>{
      console.log(`${err} while fetching single trade`)
  })
};

export const getMTGOTrades = () => {
  return fetch(`${endpointURL}/fetchMTGOTrades`, {
    method: 'GET'})
    .then(res => res.status <= 400? res : Promise.reject(res))
    .then(res => res.json())
    .catch((err)=>{
      console.log(`${err} while fetching trades`)
  })
} 


export const getOneMTGOTrade = (tradeID: Number) => {
  console.log(tradeID, 'TradeID')
  return fetch(`${endpointURL}/fetchOneMTGOTrade`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      id: tradeID,
    })
  })
    .then(res => res.status <= 400? res : Promise.reject(res))
    .then(res => res.json())
    .catch((err)=>{
      console.log(`${err} while fetching single trade`)
  })
};


export const createTrade = async (trade : TradeData) => {
  console.log('WHAT IS TRADE? ', trade);
  
  const {
    pokeName, CP, catchLocation, fastMove, chargeMove, 
    shiny, price, appraisal, listingType 
  } = trade;
  const pokeDetails = await getPoke(pokeName);
  const { id, generation, sprite } : any = pokeDetails;

  return fetch(`${endpointURL}/createPokeTrade`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      numViews: 0,
      seller: 'DevTeam',
      pokeNum: id,
      pokeName,
      pokeGen: generation,
      pokeLvl: CP,
      pokeSprite: sprite,
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

export const getUserPublicDetails = async (id: number) => {
  let call = {};
  await fetch(`${endpointURL}/getPublicDetails`, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          id: id
        }) 
      }).then(res => res.json())
      .then(data => call = data)
      .catch(err => console.log('GET USER ERROR', err))

      return call;
}

export const createMTGOTrade = async (trade:MtgoTrades) => {
  const {isFoil, price, listingType, cardName } = trade;
  const mtgoCardDetails = await getMtgoCardbyName(cardName);
  const {manaCost, colors, type, subTypes, rarity,set, setName, imageUrl}: any = mtgoCardDetails;
  return fetch(`${endpointURL}/createMTGOTrade`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      isFoil,
      price,
      listingType,
      cardName,
      manaCost,
      color:colors,
      mainType:type,
      subTypes,
      rarity,
      setAcronym:set,
      setName,
      cardImage:imageUrl
      
    })
  })
}


export const getMtgoCardbyName = async (name:string) =>{
  console.log(name)
  let mtgoCard = {}
  const magicAPIByName = `https://api.magicthegathering.io/v1/cards?name=${name}`;
  await fetch (magicAPIByName, {
    method: 'GET',
    headers:{ 
      'Content-Type':'application/json'
  }
  })
  .then(res=>res.json())
  .then(res => mtgoCard = res)
  .catch(err => console.log('GETPOKE ERROR', err))

  return mtgoCard
}

export const addToWatchList = async (tradeId:number, userId: number)=>{
    let result = await fetch(`${endpointURL}/addToWatchlist`, { 
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
     tradeId: tradeId,
     id:userId
    }) 
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log('Add To WhatchList Error: ', err));

    return result;
}
