export interface User {
  token: string;
  id: number;
  email: string;
  avatarUrl: string | undefined;
  username: string;
  trainerID?: number;
  trainerName?: string;
  mtgoID?: number;
  mtgoName?: string;
  buyerRating: number[];
  sellerRating: number[];
  transactionSales: number[];
  transactionPurchases: number[];
  transactionTrades: number[];
  numOfStrikes: number;
  watchList: number[];
  activeOffers: number[];
  createdAt?: Date;
  updatedAt?: Date;
  error: React.SetStateAction<boolean>;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface Trade {
  id: number;
  numViews: number;
  seller: string;
  pokeNum: number;
  pokeName: string;
  pokeGen: number;
  pokeLvl: number;
  fastMove: string;
  chargeMove: string;
  isShiny: boolean;
  appraisal: number;
  price: number;
  tax: number;
  pokeSprite: string;
  cardName?: string;
  cardImage?: string;
}

export interface PokeTrade {
  id: number;
  numViews: number;
  UserDatumId: number;
  seller: string;
  pokeNum: number;
  pokeName: string;
  pokeGen: number;
  pokeLvl: number;
  fastMove: string;
  chargeMove: string;
  isShiny: boolean;
  appraisal: number;
  price: number;
  tax: number;
  pokeSprite: string;
  cardName?: string;
  cardImage?: string;
}

export interface MtgTrade {
  id: number;
  buyer: string;
  buyersOfferItemId: string;
  cardImage: string;
  cardName: string;
  color: string[];
  convertedManaCost: number;
  createdAt: Date;
  expirationDate: Date;
  extraName: null;
  isFoil: boolean;
  manaCost: string;
  numViews: number;
  originaltype: null;
  price: number;
  publishDate: Date;
  rarity: string;
  UserDatumId: number;
  seller: string;
  set: string;
  setName: string;
  tax: number;
  tradeComplete: boolean;
  updatedAt: Date;
}

export interface MiniTileTrade {
  id: number;
  name: string;
  price: number;
  image: string;
  world: string;
}

export interface StandardTileTrade {
  id: number;
  name: string;
  price: number;
  image: string;
  level?: number;
  appraisal?: number;
  isShiny?: boolean;
  UserDatumId: number;
  seller: string;
  
}

export interface MiniTiles {
  pokemons: MiniTileTrade[];
  mtgs: MiniTileTrade[];
  wows: MiniTileTrade[];
  rocketLeagues: MiniTileTrade[];
}

export interface StandardTiles {
  pokemons: StandardTileTrade[];
  mtgs: StandardTileTrade[];
  wows: StandardTileTrade[];
  rocketLeagues: StandardTileTrade[];
}

export interface Trades {
  pokeTrades: PokeTrade[];
  mtgTrades: MtgTrade[];
}

export interface InitialState {
  trades: Trade[];
}

export interface SearchResponseAction {
  trades: Trade[];
  response: string;
}
