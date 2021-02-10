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
import { useHistory } from 'react-router';

export default function SearchBar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [world, setWorld] = useState('Pokemon GO');

  const tiles = useSelector((state: RootState) => state.trade);
  const handleSearchKeyPress = (searchString: string) => {
    dispatch(filterTrade(searchString, world));
    console.log('handleSearchKeyPress: I am invoked ... ', searchString, world);
  };

  const changeWorldSelector = (world: string) => {
    setWorld(world);
    console.log('world', world);
  };

  return (
    <div className="nav-container">
      <div className="logo-img-link" onClick={(): void => history.push(`/`)}>
        <img
          className="logo-img"
          src={'/assets/trademon-logo.png'}
          alt="trademon logo"
        />
      </div>
      <div className="search-container-vertical">
        <div
          className="trademon-title-link"
          onClick={(): void => history.push(`/`)}
        >
          <h1 className="platform-text">trademon.io</h1>
        </div>
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
