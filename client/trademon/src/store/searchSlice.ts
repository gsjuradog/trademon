import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
  filter,
  map,
  distinctUntilChanged,
  debounceTime,
  switchMap,
  catchError,
} from 'rxjs/operators';

import { Trade, SearchResponseAction } from './interfaces';

const initialState: Trade[] = [];

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchQuery(state, action) {
      return state;
    },
    searchResults(state, action: PayloadAction<SearchResponseAction>) {
      state = action.payload.trades;
      console.log('Search Results: ', 'STATE:', state);
      return state;
    },
  },
});

export const { searchQuery, searchResults } = searchSlice.actions;
export default searchSlice.reducer;

export const searchEpic = (action$: any) =>
  action$.pipe(
    ofType('search/searchQuery'),
    debounceTime(500),
    distinctUntilChanged(),
    filter((action: any) => action.payload.length > 2),
    switchMap((action: any) =>
      ajax.getJSON<Trade>('https://trademon.herokuapp.com/fetchTrades').pipe(
        map((data: any) => searchResults({ trades: data, response: '+api' })),

        catchError((error, caught) => caught),
      ),
    ),
  );
