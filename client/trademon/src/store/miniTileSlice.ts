import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';
import { PokeTrade, MtgTrade, MiniTileTrade, MiniTiles } from './interfaces';
import { getTrades, getMTGOTrades } from '../utils/rest';

const initialState: MiniTiles = { pokemons: [], mtgs: [], wows: [] };

const miniTileSlice = createSlice({
  name: 'trade',
  initialState,
  reducers: {
    getMiniTilesP(state, { payload }: PayloadAction<MiniTileTrade[]>) {
      console.log('TRADE REDUCER, payload is: ', payload);
      state.pokemons = payload;
      console.log('state: ', payload);
      return state;
    },
    getMiniTilesM(state, { payload }: PayloadAction<MiniTileTrade[]>) {
      console.log('TRADE REDUCER, payload is: ', payload);
      state.mtgs = payload;
      console.log('state: ', payload);
      return state;
    },
    getMiniTilesW(state, { payload }: PayloadAction<MiniTileTrade[]>) {
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
} = miniTileSlice.actions;
export default miniTileSlice.reducer;

// THUNK / EPIC

// THUNK1: Fetching Trades
export const fetchTrades = (world: string): AppThunk => async (dispatch) => {
  try {
    console.log(
      'THUNK fetchMiniTiles I am getting Trades of the world: ',
      world,
    );

    let response: any[] = [];
    let trades: MiniTileTrade[] = [];

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

const mapPokemonsToUtrade = (trades: PokeTrade[]): MiniTileTrade[] => {
  return trades.map((trade) => {
    return {
      tradeID: trade.tradeID,
      name: trade.pokeName,
      price: trade.price,
      image: trade.pokeSprite,
      world: 'Pokemon',
    };
  });
};

const mapMtgsToUtrade = (trades: MtgTrade[]): MiniTileTrade[] => {
  return trades.map((trade) => {
    return {
      tradeID: trade.tradeID,
      name: trade.cardName,
      price: trade.price,
      image: trade.cardImage,
      world: 'MTG',
    };
  });
};
