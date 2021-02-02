import { configureStore, Action } from '@reduxjs/toolkit';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { pingEpic, pingSlice } from './pingpongSlice';
import { searchEpic, SearchSlice } from './searchSlice';
import { PingPongState } from './pingpongSlice';
import { InitialState } from './searchSlice';
import { ThunkAction } from 'redux-thunk';

const epicMiddleware = createEpicMiddleware();
export const rootEpic = combineEpics(pingEpic, searchEpic);

const store = configureStore({
  reducer: {
    ping: pingSlice,
    search: SearchSlice,
  },
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);

export default store;

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type RootState = ReturnType<typeof store.getState>;
