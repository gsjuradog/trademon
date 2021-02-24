import React from 'react';
import '../../styling/navs.scss';
import ProfileOverlay from './searchComponents/profileOverlayComponent';
import { useHistory } from 'react-router';

export default function NavComponent() {
  const history = useHistory();
 
  return (
    <div className="nav-container">
      <img
        onClick={(): void => history.push(`/Pokemon Go`)}
        className="logo-img"
        src={'/assets/trademon-logo.png'}
        alt="trademon logo"
      />
      <div className="nav-trademon-text">
        <div className="trademon-title-link">
          <h1 onClick={(): void => history.push(`/Pokemon Go`)} 
            className="platform-text">trademon.io</h1
          >
        </div>
        
      </div>
      <ProfileOverlay></ProfileOverlay>
    </div>
  );
}
