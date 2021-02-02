import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
  filter,
  map,
  mapTo,
  distinctUntilChanged,
  debounceTime,
  switchMap,
  catchError,
} from 'rxjs/operators';

export interface InitialState {
  startText: string;
  text: string;
  color: string;
}

const initialState = {
  startText: ': ',
  text: ': ',
  color: 'green',
  trades: [],
} as InitialState;

interface searchResponseAction {
  response: string;
  color: string;
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchQuery(state, action) {
      state.startText = action.payload;
      return state;
    },
    searchResults(state, action: PayloadAction<searchResponseAction>) {
      state.text += action.payload.response;
      state.color = action.payload.color;
      return state;
    },
  },
});

export const { searchQuery, searchResults } = searchSlice.actions;
export default searchSlice.reducer;

// EPIC 1:
export const searchEpic = (action$: any, state$: any) =>
  action$.pipe(
    ofType('search/keystroke'),
    debounceTime(500),
    distinctUntilChanged(),
    filter((action: any) => action.payload.length > 2),
    switchMap((action: any) =>
      ajax
        .getJSON(`https://trademon.herokuapp.com/${action.payload}`)
        //.getJSON('https://pokeapi.co/api/v2/pokemon/' + action.payload) // + action.payload)
        .pipe(
          map((response) => console.log(response)),
          catchError((error, caught) => caught),
        ),
    ),
    mapTo(searchResults({ response: '+api, ', color: 'red' })),
  );
