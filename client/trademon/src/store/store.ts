import { configureStore, Action } from '@reduxjs/toolkit';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import SearchSlice, { searchEpic } from './searchSlice';

const epicMiddleware = createEpicMiddleware();
export const rootEpic = combineEpics(searchEpic);

const store = configureStore({
  reducer: {
    search: SearchSlice,
  },
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
