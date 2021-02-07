import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import {
  filter,
  map,
  distinctUntilChanged,
  debounceTime,
  switchMap,
  catchError,
} from 'rxjs/operators';
import { AppThunk } from './store';
import { getTrades } from '../utils/rest';

import { Trade, SearchResponseAction } from './interfaces';

const initialState: Trade[] = [];

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getPokeSuccess(state, { payload }: PayloadAction<any>) {
      console.log('Search STATE fROM THUNK: ', payload);
      state = payload;
      return state;
    },
    getPokeError(state, { payload }: PayloadAction<any>) {
      const { Error } = payload;
    },
    query(state, action) {
      return state;
    },
    searchResults(state, action: PayloadAction<SearchResponseAction>) {
      state = action.payload.trades;
      console.log('Search Results: ', 'STATE:', state);
      return state;
    },
  },
});
