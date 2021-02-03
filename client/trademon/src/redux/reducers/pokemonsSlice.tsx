import { createSlice } from '@reduxjs/toolkit';

interface PokeConstData_temp {
  id: string;
  name: string;
  pokeNum: number;
  generation: number;
}

const pokemonsData: PokeConstData_temp[] = [
  {
    id: '1',
    name: 'Charmeleon',
    pokeNum: 5,
    generation: 3,
  },
  {
    id: '2',
    name: 'Gengar',
    pokeNum: 5,
    generation: 1,
  },
  {
    id: '3',
    name: 'Lucario',
    pokeNum: 6,
    generation: 2,
  },
  {
    id: '5',
    name: 'Arceus',
    pokeNum: 8,
    generation: 2,
  },
];

const initialState: PokeConstData_temp = pokemonsData[0];

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    pokemonAdded(state: PokeConstData_temp, action) {
      return pokemonsData[action.payload];
    },
    pokemonToggled(state: PokeConstData_temp, action) {
      return pokemonsData[action.payload];
    },
    pokemonListed(state: PokeConstData_temp, action) {
      return pokemonsData[action.payload];
    },
  },
});

export const {
  pokemonAdded,
  pokemonToggled,
  pokemonListed,
} = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
