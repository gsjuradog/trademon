import React from 'react';
import '../../styling/tiles.scss';

export default function MiniTile() {
  return (
    <div className="tile-container-mini">
      <div className="sprite-mini-box">
        <img className="sprite-mini" src={'/assets/testSprite.png'}></img>
      </div>

      <div className="mini-tile-text">
        <p>Charmeleon</p>
        <p>Price: $2.99</p>
      </div>
    </div>
  );
}
