// ******************
// USER POST RELATED
export interface Offering {
  //Info for posts regardless of game
  postId:         string,
  itemId:         string,
  owner:          string,
  price:          number,
  description:    string,
  numViews:       number,
  expirationDate: Date,
  publishDate:    Date,
  //comments?
  //variable data from form, relevant to platform
  variableData:   PokeVariableData | MTGVariableData
}
export interface PokeVariableData {
  pokeLvl:        number,
  fastMove:       string,
  chargeMove:     string,
  isShiny:        boolean,
  appraisal:      number,
}

export interface MTGVariableData {
  id:             string,
  //Still need to fill this out
}

export interface PokeConstData {
  id:         string,
  name:       string,
  pokeNum:    number,
  sprite:     File, 
  generation: number
}

export interface MTGConstData {
  id:         string,
  name:       string,
  sprite:     File, 
  //Still need to fill this out
}

// ******************
// USER ACCOUNT RELATED
export interface UserCredentials {
  id:         string,
  email:      string,
  username:   string,
  password:   string,
  signUpDate: Date,
}

export interface UserData {
  username:       string,
  trainerID?:     number,
  trainerName?:   string,
  mtgoID?:        string,
  mtgoName?:      string,
  latitude:       number,
  longitude:      number,
  buyerRating:    number,
  numBuyRatings:  number,
  sellerRating:   number,
  numSellRatings: number,
  numOfStrikes:   number,
  transHistory:   Transaction[],
  activePosts:    Offering[], //It would be nice if we could have 1 interface for posts, and dynamically set part of it
  //following?
  //followers?
}

export interface Transaction {
  offerItemId:            string,
  offerItemVariableData:  PokeVariableData | MTGVariableData,
  buyer:                  string, //username
  seller:                 string, //username
  publishDate:            Date,
  tradeItemID?:           string, //If trade, item offered in return
  tradeItemVariableData?: PokeVariableData | MTGVariableData, //If trade, item details offered in return
  price?:                 number,
  tax?:                   number,
}
