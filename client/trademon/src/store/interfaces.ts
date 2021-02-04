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
}

export interface InitialState {
  trades: Trade[];
}

export interface SearchResponseAction {
  trades: Trade[];
  response: string;
}

export interface MiniTileInfo {
  id: string;
  name: string;
  price: number;
}
