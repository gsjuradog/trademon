import React, { useState } from 'react';
import '../../../styling/navs.scss';
import ProfileOverlay from './profileOverlayComponent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { filterTrade } from '../../../store/standardTileSlice';
import { useHistory } from 'react-router-dom';

export default function SearchBar() {
  const history = useHistory();

  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [world, setWorld] = useState('Pokemon GO');

  const worldFromState = useSelector(
    (state: RootState) => 'state.standardTrade.world', // unquoute to test
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
            <option value="Pokemon GO">Pokemon Go</option>
            <option value="MTG">MTG: Online</option>
            <option value="WoW">Warcraft</option>
          </select>
          <input
            type="text"
            placeholder="Search offers..."
            id="search-field"
            className="search-field"
            onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>): void =>
              handleSearchKeyPress(e.key)
            }
          />
        </div>
      </div>
      <ProfileOverlay></ProfileOverlay>
    </div>
  );
}
