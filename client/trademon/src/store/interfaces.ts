export interface User {
  token: string;
  id: number;
  email: string;
  username: string;
  trainerID?: number;
  trainerName?: string;
  mtgoID?: number;
  mtgoName?: string;
  buyerRating: number[];
  sellerRating: number[];
  numOfStrikes: number;
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
  seller: string;
  world: string;
}

export interface MiniTiles {
  pokemons: MiniTileTrade[];
  mtgs: MiniTileTrade[];
  wows: MiniTileTrade[];
}

export interface StandardTiles {
  pokemons: StandardTileTrade[];
  mtgs: StandardTileTrade[];
  wows: StandardTileTrade[];
  world: string;
}

export interface InitialState {
  trades: Trade[];
}

export interface SearchResponseAction {
  trades: Trade[];
  response: string;
}
