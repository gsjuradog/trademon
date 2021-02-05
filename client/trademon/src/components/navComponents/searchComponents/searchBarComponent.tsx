import React from 'react';
import '../../../styling/navs.scss';
import ProfileOverlay from './profileOverlayComponent';
import {
  searchQuery,
  fetchPokemon,
  filterPokemon,
} from '../../../store/searchSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';

export default function SearchBar() {
  const dispatch = useDispatch();

  const handleSearchKeyPress = (value: string) => {
    // dispatch(searchQuery(value));
    dispatch(fetchPokemon(value, '1'));
    dispatch(filterPokemon(value, '1'));
  };

  return (
    <div className="nav-container">

      <a className="logo-img-link" href={'/'} >
        <img className="logo-img" src={'/assets/trademon-logo.png'} alt="trademon logo"/>
      </a>

      <div className="search-container-vertical">

        <a href={'/'}>
          <h1 className="platform-text">trademon.io</h1>
        </a>

        <div className="filters-box">
          <select className="search-select-dropdown">
            <option value="Pokemon Go">Pokemon Go</option>
            <option value="MTG: Online">MTG: Online</option>
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
