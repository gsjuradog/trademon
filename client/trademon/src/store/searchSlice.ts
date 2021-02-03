import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ofType } from 'redux-observable';
// import axios from 'axios';
import { ajax } from 'rxjs/ajax';
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

export interface InitialState {
  startText: string;
  text: string;
  color: string;
  trades: Trade[];
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getPokeSuccess(state, { payload }: PayloadAction<any>) {},
    getPokeError(state, { payload }: PayloadAction<any>) {
      const { pageCount, issues, pageLinks } = payload;
    },
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

export const {
  searchQuery,
  searchResults,
  getPokeSuccess,
  getPokeError,
} = searchSlice.actions;
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

// THUNK
export const fetchPokemon = (name: string, id: string): AppThunk => async (
  dispatch,
) => {
  try {
    console.log('I am in THUNK ', name);
    const poke = await getTrades();
    // dispatch(getPokeSuccess(poke));
  } catch (err) {
    dispatch(getPokeError(err.toString()));
  }
};

/* export interface PokeResult {
  name: string | null;
  id: string;
}

export async function getPoke(name: string, id: string): Promise<PokeResult> {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  try {
    const pokeResponse = await axios.get<PokeResult[]>(url);
    console.log('pokeResponse: ', pokeResponse);
    return {
      name,
      id,
    };
  } catch (err) {
    throw err;
  }
} */
