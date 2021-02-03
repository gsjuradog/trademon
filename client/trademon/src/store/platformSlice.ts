import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';
import { Trade } from './interfaces';
import { getTrades } from '../utils/rest';

const initialState: Trade[] = [];

function loadingFailed(state: IssuesState, action: PayloadAction<string>) {
  state.isLoading = false;
  state.error = action.payload;
}

const platformSlice = createSlice({
  name: 'platform',
  initialState: initialState,
  reducers: {
    getMiniTiles(state, { payload }: PayloadAction<Issue>) {
      const { number } = payload;
      state.issuesByNumber[number] = payload;
    },
    getMiniTilesError: loadingFailed,
  },
});

export const { getMiniTiles, getMiniTilesError } = issues.actions;

export default platformSlice.reducer;

// THUNK / EPIC
// THUNK
export const fetchMiniTiles = (world: string): AppThunk => async (dispatch) => {
  try {
    console.log('I am in THUNK ', world);
    const info = await getTrades();
    console.log('THUNK: info ', info);
    dispatch(getMiniTiles(info));
  } catch (err) {
    dispatch(getMiniTilesError(err.toString()));
  }
};
