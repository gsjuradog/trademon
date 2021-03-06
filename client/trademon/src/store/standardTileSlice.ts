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
  rocketLeagues: [],
};

const standardTileSlice = createSlice({
  name: 'standard-tiles',
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
    getStandardTilesRoc(
      state,
      { payload }: PayloadAction<StandardTileTrade[]>,
    ) {
      state.rocketLeagues = payload;
      console.log('state: ', payload);
      return state;
    },
    getStandardTilesError(state, action: PayloadAction<string>) {
      return state;
    },
  },
});

export const {
  getStandardTilesPoke,
  getStandardTilesMTG,
  getStandardTilesWoW,
  getStandardTilesRoc,
  getStandardTilesError,
} = standardTileSlice.actions;
export default standardTileSlice.reducer;

export const fetchTrades = (world: string): AppThunk => async (dispatch) => {
  try {
    let response: any[] = [];
    let trades: StandardTileTrade[] = [];

    switch (world) {
      case 'Pokemon GO':
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
        dispatch(getStandardTilesWoW(trades));
        break;
      case 'RocketLeague':
        response = await getTrades();
        trades = mapPokemonsToUtrade(response);
        dispatch(getStandardTilesRoc(trades));
        break;
      default:
        break;
    }
  } catch (err) {
    dispatch(getStandardTilesError(err.toString()));
  }
};

export const filterTrade = (
  searchInput: string,
  world: string,
): AppThunk => async (dispatch) => {
  try {
    console.log('I reached the Slice: ', searchInput, world);

    let response: any[] = [];
    let trades: StandardTileTrade[] = [];
    let filteredTrades: StandardTileTrade[] = [];

    console.log('I am in FILTER ', searchInput, 'our world is: ', world);
    searchInput = searchInput.toLowerCase();

    switch (world) {
      case 'Pokemon GO':
        response = await getTrades();
        trades = mapPokemonsToUtrade(response);
        filteredTrades = trades.filter((p: StandardTileTrade) =>
          p.name.toLowerCase().startsWith(searchInput),
        );
        dispatch(getStandardTilesPoke(filteredTrades));
        console.log('3. I am in POKE- FILTER ', searchInput, filteredTrades);
        break;
      case 'MTG':
        response = await getMTGOTrades();
        trades = mapMtgsToUtrade(response);
        filteredTrades = trades.filter((p: StandardTileTrade) =>
          p.name.toLowerCase().startsWith(searchInput),
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
      UserDatumId: trade.UserDatumId,
      seller: trade.seller,
      appraisal: trade.appraisal,
      isShiny: trade.isShiny,
      world: 'Pokemon GO',
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
      UserDatumId: trade.UserDatumId,
      seller: trade.seller,
      world: 'MTG',
    };
  });
};
