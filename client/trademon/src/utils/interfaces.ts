// ******************
// USER POST RELATED
export interface Trades {
  id: number;
  numViews: number;
  UserDatumId: number;
  seller: string;
  pokeNum: number;
  pokeName: string;
  pokeGen: number;
  pokeLvl: number;
  pokeSprite: string;
  fastMove: string;
  chargeMove: string;
  isShiny: boolean;
  appraisal: number;
  price: number;
  tax: number;
}
export interface PokeVariableData {
  pokeLvl: number;
  fastMove: string;
  chargeMove: string;
  isShiny: boolean;
  appraisal: number;
}

export interface MtgoTrades {
  id:number,
  expirationDate:string,//change to date later
  numViews:number,
  cardName:string,
  cardImage:string,
  setName:string,
  setAcronym: string;
  convertedManaCost:number,
  manaCost:string,
  seller:string,
  type:string,
  subTypes:string[],
  rarity:string,
  color:string[],
  isFoil:boolean,
  price:number,
  tax:number,
  listingType:string,
  buyer:string|null,
  buyersOfferItemId:number|null,
  tradeComplete:boolean,

}

export interface MTGVariableData {
  id: string;
  //Still need to fill this out
}

export interface PokeConstData {
  id: string;
  name: string;
  pokeNum: number;
  sprite: File;
  generation: number;
}

export interface MTGConstData {
  id: string;
  name: string;
  sprite: File;
  //Still need to fill this out
}

// ******************
// USER ACCOUNT RELATED
export interface UserCredentials {
  id: string;
  email: string;
  username: string;
  password: string;
  signUpDate: Date;
}

export interface Transaction {
  offerItemId: string;
  offerItemVariableData: PokeVariableData | MTGVariableData;
  buyer: string; //username
  seller: string; //username
  publishDate: Date;
  tradeItemID?: string; //If trade, item offered in return
  tradeItemVariableData?: PokeVariableData | MTGVariableData; //If trade, item details offered in return
  price?: number;
  tax?: number;
}

export interface TradeData {
  pokeName: string;
  CP: number;
  catchLocation: string;
  fastMove: string;
  chargeMove: string;
  shiny: boolean;
  price: number;
  appraisal: number;
  listingType: string;
}

//Login / SignUp Interfaces
export interface Create {
  name: string;
  email: string;
  password: string;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface Message {
  sender: number;
  PrivateChatId: number;
  content: string;
  createdAt: string;
}
