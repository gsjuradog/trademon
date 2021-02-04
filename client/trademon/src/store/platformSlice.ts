import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';
import { Trade } from './interfaces';
import { getTrades } from '../utils/rest';

const initialState: Trade[] = [];

function loadingFailed(state: Trade[], action: PayloadAction<string>) {
  console.log('I am in reducer ', action.payload);
  return state;
}

const platformSlice = createSlice({
  name: 'platform',
  initialState,
  reducers: {
    getMiniTiles(state, { payload }: PayloadAction<Trade[]>) {
      console.log('I am in reducer ', payload);
      state = payload;
      return state;
    },
    getMiniTilesError: loadingFailed,
  },
});

export const { getMiniTiles, getMiniTilesError } = platformSlice.actions;
export default platformSlice.reducer;

// THUNK / EPIC
// THUNK
export const fetchMiniTiles = (world: string): AppThunk => async (dispatch) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    console.clear;
    console.log('I am in THUNK ', world);
    const info = await getTrades();
    console.log('THUNK: info ', info);
    dispatch(getMiniTiles(info));
  } catch (err) {
    dispatch(getMiniTilesError(err.toString()));
  }
};
