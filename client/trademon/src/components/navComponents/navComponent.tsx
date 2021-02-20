import React from 'react';
import '../../styling/navs.scss';
import ProfileOverlay from './searchComponents/profileOverlayComponent';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useHistory } from 'react-router';
// import {
//   searchQuery,
//   fetchPokemon,
//   filterPokemon,
// } from '../../store/searchSlice';

export default function NavComponent() {
  const history = useHistory();
  const tiles = useSelector((state: RootState) => state.trade);
 
  return (
    <div className="nav-container">
      <img
        onClick={(): void => history.push(`/`)}
        className="logo-img"
        src={'/assets/trademon-logo.png'}
        alt="trademon logo"
      />
      <div className="nav-trademon-text">
        <div className="trademon-title-link">
          <h1 onClick={(): void => history.push(`/`)} 
            className="platform-text">trademon.io</h1
          >
        </div>
        
      </div>
      <ProfileOverlay></ProfileOverlay>
    </div>
  );
}
