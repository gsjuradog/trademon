import React from 'react';
import '../../styling/tiles.scss';

export default function MiniTile() {
  return (
    <div className="tile-container-mini">
      <div className="sprite-mini-box">
        <img className="sprite-mini" src={'/assets/testSprite.png'}></img>
      </div>

      <div className="mini-tile-info-box">
        <div className="mini-fave-icon-container">
          <img src={'/assets/FavIconEmpty.png'} className="watch-list-heart"></img>
        </div>
        <p>Charmeleon</p>
        <p>Price: $2.99</p>
      </div>
    </div>
  );
}
