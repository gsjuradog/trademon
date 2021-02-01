import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { pokemonListed } from '../../redux/reducers/pokemonsSlice';

export default function ReduxTestListComponent() {
  const pokemon = useSelector((state: any) => state.pokemons);
  const dispatch = useDispatch();

  const handleList = () => {
    console.log('Pokemon List: ', pokemon);
    dispatch(pokemonListed(Math.floor(Math.random() * 4)));
  };

  return (
    <div>
      <h1>REDUX LIST COMPONENT</h1>
      <button
        style={{ color: 'darkbrown', backgroundColor: 'brown' }}
        onClick={handleList}
      >
        RANDOM
      </button>
    </div>
  );
}