import React from 'react';
import '../../styling/tiles.scss';

export default function MiniTile() {
  return (
    <a href="/offer/randomID123">
      <div className="mini-tile-container">
        <div className="sprite-mini-box">
          <img className="sprite-mini" src={'/assets/testSprite.png'} alt=''></img>
        </div>

        <div className="mini-tile-info-box">
          <div className="mini-fave-icon-container">
            <img src={'/assets/FavIconEmpty.png'} className="heart-mini" alt=''></img>
          </div>
          <div className="mini-tile-text">Charmeleon</div>
          <div className="mini-tile-text">$2.99</div>
        </div>
      </div>
    </a>
  );
}
