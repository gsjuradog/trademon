export interface Trade {
  tradeID: number;
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
  tradeID: number;
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
  tradeID: number;
  updatedAt: Date;
}

export interface MiniTileTrade {
  tradeID: number;
  name: string;
  price: number;
  image: string;
  world: string;
}

// export interface StandardTileTrade {
//   tradeID: number;
//   numViews: number;
//   seller: string;
//   skillNum?: number;
//   name?: string | undefined;
//   gen?: number;
//   level?: number;
//   isShiny?: boolean;
//   price: number;
//   tax: number;
//   image: string | undefined;
//   world: string;
// }

export interface StandardTileTrade {
  tradeID: number;
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
}

export interface InitialState {
  trades: Trade[];
}

export interface SearchResponseAction {
  trades: Trade[];
  response: string;
}
