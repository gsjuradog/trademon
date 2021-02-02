import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  pokemonAdded,
  pokemonToggled,
} from '../../store/reducers/pokemonsSlice';

export default function ReduxTestComponent() {
  const pokemon = useSelector((state: any) => state.pokemons);

  const dispatch = useDispatch();

  const handleAdded = () => {
    console.log('Pokemon Added: ', pokemon);
    dispatch(pokemonAdded(Math.floor(Math.random() * 4)));
  };

  const handleToggled = () => {
    console.log('Pokemon Toggled: ', pokemon);
    dispatch(pokemonToggled(0));
  };

  return (
    <div>
      <h1>REDUX TEST COMPONENT</h1>
      <button
        style={{ color: 'darkgreen', backgroundColor: 'lightgreen' }}
        onClick={handleAdded}
      >
        RANDOM
      </button>
      +
      <button
        style={{ color: 'darkred', backgroundColor: 'pink' }}
        onClick={handleToggled}
      >
        TOGGLE
      </button>
      <h2>Pokemon: </h2>
      <h3>Generation: {pokemon.generation}</h3>
      <div className="tile-container-med">
        <div className="title-row">
          <span className="spacer-span"></span>
          <h3>{pokemon.name}</h3>
          <img alt="" src={'/assets/FavIconEmpty.png'}></img>
        </div>
        <div className="sprite-row">
          <img
            alt=""
            className="sprite-med"
            src={'/assets/pokemons/' + pokemon.name + '.png'}
          ></img>
        </div>
        <div className="info-row">
          <p>CP: {pokemon.pokeNum}</p>
          <p>Stars</p>
        </div>
        <div className="seller-row">
          <div className="seller-info">
            <img
              alt=""
              className="avatar-med"
              src={'/assets/avatarIcon.png'}
            ></img>
            <p className="seller-text">Seller</p>
          </div>
          <p>$1</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
