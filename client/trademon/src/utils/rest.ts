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

export const createTrade = (seller: String, buyer: String) => {
  fetch(`${endpointURL}/createTrade`, {
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
    .catch(err => console.log('CREATE TRADE ERROR', err))
}