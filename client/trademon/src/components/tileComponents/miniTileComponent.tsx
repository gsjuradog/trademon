import React from 'react';
import '../../styling/tiles.scss';
import { UTrade } from '../../store/interfaces';

interface IProps {
  world: string;
}

export default function MiniTile(trade: UTrade) {
  switch (trade.world) {
    case 'Pokemon':
      break;
    case 'MTG':
      break;
    case 'WoW':
      break;
    default:
      break;
  }

  return (
    <a href="/offer/randomID123">
      <div className="mini-tile-container">
        <div className="sprite-mini-box">
          <img className="sprite-mini" src={trade.image} alt=""></img>
        </div>

        <div className="mini-tile-info-box">
          <div className="mini-fave-icon-container">
            <img
              src={'/assets/FavIconEmpty.png'}
              className="heart-mini"
              alt=""
            ></img>
          </div>
          <div className="mini-tile-text">{trade.name}</div>
          <div className="mini-tile-text">$ {trade.price}</div>
        </div>
      </div>
    </a>
  );
}
