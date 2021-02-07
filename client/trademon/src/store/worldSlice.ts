import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';
import {
  PokeTrade,
  MtgTrade,
  StandardTileTrade,
  StandardTiles,
} from './interfaces';
import { getTrades, getMTGOTrades } from '../utils/rest';

const initialState: string[] = [];

const worldSlice = createSlice({
  name: 'world',
  initialState,
  reducers: {
    setWorld(state, { payload }: PayloadAction<string[]>) {
      state = payload;
      return state;
    },
    resetWorld(state) {
      state = [];
      return state;
    },
  },
});

export const { setWorld, resetWorld } = worldSlice.actions;
export default worldSlice.reducer;
