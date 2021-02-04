import React from 'react';
import '../../../styling/navs.scss';
import ProfileOverlay from './profileOverlayComponent';
import { searchQuery } from '../../../store/searchSlice';
import { useDispatch } from 'react-redux'; //deleted useSelector
// import { RootState } from '../../../store/store';

export default function SearchBar() {
  const dispatch = useDispatch();
  const handleSearchKeyPress = (value: string) => {
    dispatch(searchQuery(value));
  };

  return (
    <div className="nav-container">

      <a className="logo-img-link" href={'/'} >
        <img className="logo-img" src={'/assets/trademon-logo.png'} alt="trademon logo"/>
      </a>

      <div className="search-container-vertical">

        <h1 className="platform-text">trademon.io</h1>
        
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
