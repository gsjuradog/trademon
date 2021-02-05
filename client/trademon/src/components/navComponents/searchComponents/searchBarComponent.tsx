import React, { useState } from 'react';
import '../../../styling/navs.scss';
import ProfileOverlay from './profileOverlayComponent';
import {
  searchQuery,
  fetchPokemon,
  filterPokemon,
} from '../../../store/searchSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { filterTrade } from '../../../store/standardTileSlice';

export default function SearchBar() {
  const dispatch = useDispatch();

  const [world, setWorld] = useState('Pokemon');

  const worldFromState = useSelector(
    (state: RootState) => state.standardTrade.world,
  );

  const handleSearchKeyPress = (searchString: string) => {
    dispatch(filterTrade(searchString, worldFromState));
  };

  const changeWorldSelector = (world: string) => {
    setWorld(world);
    dispatch(setWorld(world));
    console.log('world (set in SearchBar)', world);
  };

  return (
    <div className="nav-container">
      <a className="logo-img-link" href={'/'}>
        <img
          className="logo-img"
          src={'/assets/trademon-logo.png'}
          alt="trademon logo"
        />
      </a>
      <div className="search-container-vertical">
        <a href={'/'}>
          <h1 className="platform-text">trademon.io</h1>
        </a>
        <div className="filters-box">
          <select
            className="search-select-dropdown"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
              changeWorldSelector(e.target.value)
            }
          >
            <option value="Pokemon">Pokemon Go</option>
            <option value="MTG">MTG: Online</option>
            <option value="WoW">Warcraft</option>
          </select>
          <input
            type="text"
            placeholder="Search offers..."
            id="search-field"
            className="search-field"
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              handleSearchKeyPress(e.target.value)
            }
          />
        </div>
      </div>
      <ProfileOverlay></ProfileOverlay>
    </div>
  );
}
