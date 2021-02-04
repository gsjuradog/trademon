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

export interface UTrade {
  tradeID: number;
  numViews: number;
  seller: string;
  skillNum?: number;
  name?: string | undefined;
  gen?: number;
  level?: number;
  isShiny?: boolean;
  // appraisal?: number | string | undefined;
  price: number;
  tax: number;
  image: string | undefined;
  world: string;
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

// export interface MtgTrade {
//   buyer: null;
//   buyersOfferItemId: null;
//   cardImage: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card';
//   cardName: 'Archangel Avacyn';
//   color: ['White'];
//   convertedManaCost: null;
//   createdAt: '2021-02-04T13:28:11.559Z';
//   expirationDate: '2021-02-11T13:27:47.025Z';
//   extraName: null;
//   isFoil: false;
//   manaCost: '{3}{W}{W}';
//   numViews: 0;
//   originaltype: null;
//   price: 2;
//   publishDate: '2021-02-04T13:28:11.557Z';
//   rarity: 'Mythic Rare';
//   seller: 'Stiches';
//   set: null;
//   setName: 'Shadows over Innistrad';
//   tax: 1;
//   tradeComplete: false;
//   tradeID: 1;
//   updatedAt: '2021-02-04T13:28:11.559Z';
// }
