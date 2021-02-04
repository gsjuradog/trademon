import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';
import { Trade, UTrade } from './interfaces';
import { getTrades, getMTGOTrades } from '../utils/rest';

export interface Tiles {
  pokemons: UTrade[];
  mtgs: UTrade[];
  wows: UTrade[];
}

const initialState: Tiles = { pokemons: [], mtgs: [], wows: [] };

const tradeSlice = createSlice({
  name: 'trade',
  initialState,
  reducers: {
    getMiniTilesP(state, { payload }: PayloadAction<UTrade[]>) {
      console.log('TRADE REDUCER, payload is: ', payload);
      state.pokemons = payload;
      console.log('state: ', payload);
      return state;
    },
    getMiniTilesM(state, { payload }: PayloadAction<UTrade[]>) {
      console.log('TRADE REDUCER, payload is: ', payload);
      state.mtgs = payload;
      console.log('state: ', payload);
      return state;
    },
    getMiniTilesW(state, { payload }: PayloadAction<UTrade[]>) {
      console.log('TRADE REDUCER, payload is: ', payload);
      state.wows = payload;
      console.log('state: ', payload);
      return state;
    },
    getMiniTilesError(state, action: PayloadAction<string>) {
      console.error('TRADE - Error Handling: ', action.payload);
      return state;
    },
  },
});

export const {
  getMiniTilesP,
  getMiniTilesM,
  getMiniTilesW,
  getMiniTilesError,
} = tradeSlice.actions;
export default tradeSlice.reducer;

// THUNK / EPIC

// THUNK1: Fetching Trades
export const fetchTrades = (world: string): AppThunk => async (dispatch) => {
  try {
    console.log(
      'THUNK fetchMiniTiles I am getting Trades of the world: ',
      world,
    );

    let response: Trade[] = [];
    let trades: UTrade[] = [];

    switch (world) {
      case 'Pokemon':
        response = await getTrades();
        trades = mapPokemonsToUtrade(response);
        dispatch(getMiniTilesP(trades));
        break;
      case 'MTG':
        response = await getMTGOTrades();
        trades = mapMtgsToUtrade(response);
        dispatch(getMiniTilesM(trades));
        break;
      case 'WoW':
        response = await getTrades();
        trades = mapPokemonsToUtrade(response);
        dispatch(getMiniTilesP(trades));
        break;
      default:
        return [];
        break;
    }

    console.log(
      'TRADE THUNK fetchMiniTiles: I fetched: ',
      response,
      ' from the world: ',
      world,
      'trades ',
      trades,
    );
  } catch (err) {
    dispatch(getMiniTilesError(err.toString()));
  }
};

const mapPokemonsToUtrade = (trades: Trade[]): UTrade[] => {
  return trades.map((trade) => {
    return {
      tradeID: trade.tradeID,
      numViews: trade.numViews,
      seller: trade.seller,
      skillNum: trade.pokeNum,
      name: trade.pokeName,
      gen: trade.pokeGen,
      level: trade.pokeLvl,
      isShiny: trade.isShiny,
      // appraisal: trade.appraisal,
      price: trade.price,
      tax: trade.tax,
      image: trade.pokeSprite,
      world: 'Pokemon',
    };
  });
};

const mapMtgsToUtrade = (trades: Trade[]): UTrade[] => {
  return trades.map((trade) => {
    return {
      tradeID: trade.tradeID,
      numViews: trade.numViews,
      seller: trade.seller,
      skillNum: trade.pokeNum,
      name: 'MTGO NAME', //trade.cardName,
      gen: trade.pokeGen,
      level: trade.pokeLvl,
      isShiny: trade.isShiny,
      // appraisal: trade.appraisal,
      price: trade.price,
      tax: trade.tax,
      image: trade.cardImage,
      world: 'MTG',
    };
  });
};
