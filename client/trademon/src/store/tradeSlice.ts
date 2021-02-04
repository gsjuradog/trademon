import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';
import { Trade } from './interfaces';
import { getTrades } from '../utils/rest';

const initialState: Trade[] = [];

const tradeSlice = createSlice({
  name: 'trade',
  initialState,
  reducers: {
    getMiniTiles(state, { payload }: PayloadAction<Trade[]>) {
      console.log('TRADE REDUCER, payload is: ', payload);
      state = payload;
      console.log('state: ', payload);
      return state;
    },
    getMiniTilesError(state: Trade[], action: PayloadAction<string>) {
      console.error('TRADE - Error Handling: ', action.payload);
      return state;
    },
  },
});

export const { getMiniTiles, getMiniTilesError } = tradeSlice.actions;
export default tradeSlice.reducer;

// THUNK / EPIC

// THUNK1: Fetching Trades
export const fetchTrades = (world: string): AppThunk => async (dispatch) => {
  try {
    console.log(
      'THUNK fetchMiniTiles I am getting Trades of the world: ',
      world,
    );

    let trades: Trade[] = [];

    switch (world) {
      case 'Pokemon':
        trades = await getTrades();
        break;
      case 'MTG':
        trades = await getTrades();
        break;
      default:
        trades = await getTrades();
        break;
    }

    console.log(
      'TRADE THUNK fetchMiniTiles: I fetched: ',
      trades,
      ' from the world: ',
      world,
    );
    dispatch(getMiniTiles(trades));
  } catch (err) {
    dispatch(getMiniTilesError(err.toString()));
  }
};
