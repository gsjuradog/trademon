import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './reducers/pokemonsSlice';

const store: any = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    // another: anotherReducer, // adding additional reducer
  },
});

export type RootState = ReturnType<typeof store.getState>; // to use with Typescript
export default store;
