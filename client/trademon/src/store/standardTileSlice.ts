import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';
import {
  PokeTrade,
  MtgTrade,
  StandardTileTrade,
  StandardTiles,
} from './interfaces';
import { getTrades, getMTGOTrades } from '../utils/rest';

const initialState: StandardTiles = {
  pokemons: [],
  mtgs: [],
  wows: [],
  world: '',
};

const standardTileSlice = createSlice({
  name: 'standardTrade',
  initialState,
  reducers: {
    getStandardTilesPoke(
      state,
      { payload }: PayloadAction<StandardTileTrade[]>,
    ) {
      state.pokemons = payload;
      console.log('state: ', payload);
      return state;
    },
    getStandardTilesMTG(
      state,
      { payload }: PayloadAction<StandardTileTrade[]>,
    ) {
      state.mtgs = payload;
      console.log('state: ', payload);
      return state;
    },
    getStandardTilesWoW(
      state,
      { payload }: PayloadAction<StandardTileTrade[]>,
    ) {
      state.wows = payload;
      console.log('state: ', payload);
      return state;
    },
    getStandardTilesError(state, action: PayloadAction<string>) {
      return state;
    },
    setWorld(state, action: PayloadAction<string>) {
      state.world = action.payload;
      console.log('Current World is: ');

      return state;
    },
  },
});

export const {
  getStandardTilesPoke,
  getStandardTilesMTG,
  getStandardTilesWoW,
  getStandardTilesError,
  setWorld,
} = standardTileSlice.actions;
export default standardTileSlice.reducer;

// THUNK / EPIC

// THUNK1: Fetching Trades
export const fetchTrades = (world: string): AppThunk => async (dispatch) => {
  try {
    let response: any[] = [];
    let trades: StandardTileTrade[] = [];

    switch (world) {
      case 'Pokemon':
        response = await getTrades();
        trades = mapPokemonsToUtrade(response);
        dispatch(getStandardTilesPoke(trades));
        break;
      case 'MTG':
        response = await getMTGOTrades();
        trades = mapMtgsToUtrade(response);
        dispatch(getStandardTilesMTG(trades));
        break;
      case 'WoW':
        response = await getTrades();
        trades = mapPokemonsToUtrade(response);
        dispatch(getStandardTilesPoke(trades));
        break;
      default:
        // return [];
        break;
    }
  } catch (err) {
    dispatch(getStandardTilesError(err.toString()));
  }
};

// THUNK 2. filter
export const filterTrade = (
  searchInput: string,
  world: string,
): AppThunk => async (dispatch) => {
  try {
    let response: any[] = [];
    let trades: StandardTileTrade[] = [];
    let filteredTrades: StandardTileTrade[] = [];

    console.log('I am in FILTER ', searchInput, 'our world is: ', world);

    switch (world) {
      case 'Pokemon':
        response = await getTrades();
        trades = mapPokemonsToUtrade(response);
        filteredTrades = trades.filter((p: StandardTileTrade) =>
          p.name.includes(searchInput),
        );
        dispatch(getStandardTilesPoke(filteredTrades));
        break;
      case 'MTG':
        console.log('I am here! in MTG!');

        response = await getMTGOTrades();
        trades = mapMtgsToUtrade(response);
        filteredTrades = trades.filter((p: StandardTileTrade) =>
          p.name.includes(searchInput),
        );
        dispatch(getStandardTilesMTG(filteredTrades));
        break;
      case 'WoW':
        break;
      default:
        break;
    }
  } catch (err) {
    dispatch(getStandardTilesError(err.toString()));
  }
};

const mapPokemonsToUtrade = (trades: PokeTrade[]): StandardTileTrade[] => {
  return trades.map((trade) => {
    return {
      id: trade.id,
      name: trade.pokeName,
      price: trade.price,
      image: trade.pokeSprite,
      level: trade.pokeLvl,
      seller: trade.seller,
      world: 'Pokemon',
    };
  });
};

const mapMtgsToUtrade = (trades: MtgTrade[]): StandardTileTrade[] => {
  return trades.map((trade) => {
    return {
      id: trade.id,
      name: trade.cardName,
      price: trade.price,
      image: trade.cardImage,
      // level: trade.pokeLvl,
      seller: trade.seller,
      world: 'MTG',
    };
  });
};
