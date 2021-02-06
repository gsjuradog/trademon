import { configureStore, Action } from '@reduxjs/toolkit';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import UserSlice from './userSlice';
import SearchSlice, { searchEpic } from './searchSlice';
import MiniTileSlice from './miniTileSlice';
import StandardTileSlice from './standardTileSlice';
import { ThunkAction } from 'redux-thunk';
import thunk from 'redux-thunk';

const epicMiddleware = createEpicMiddleware();
export const rootEpic = combineEpics(searchEpic);

const store = configureStore({
  reducer: {
    user: UserSlice,
    search: SearchSlice,
    trade: MiniTileSlice,
    standardTrade: StandardTileSlice,
  },
  middleware: [epicMiddleware, thunk],
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [],
});

epicMiddleware.run(rootEpic);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
