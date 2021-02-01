import React from 'react';
import '../../styling/tiles.scss';

export default function MiniTile() {
  return (
    <a href="/offering/">
      <div className="mini-tile-container">
        <div className="sprite-mini-box">
          <img className="sprite-mini" src={'/assets/testSprite.png'}></img>
        </div>

        <div className="mini-tile-info-box">
          <div className="mini-fave-icon-container">
            <img src={'/assets/FavIconEmpty.png'} className="heart"></img>
          </div>
          <div className="mini-tile-text">Charmeleon</div>
          <div className="mini-tile-text">$2.99</div>
        </div>
      </div>
    </a>
  );
}
