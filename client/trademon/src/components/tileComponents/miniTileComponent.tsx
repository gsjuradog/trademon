import React from 'react';
import '../../styling/tiles.scss';
import { Trade } from '../../store/interfaces';

interface IProps {
  world: string;
}

export default function MiniTile(trade: any) {
  console.log('Mini Tile trade: > ', trade.world);

  return (
    <a href="/offer/randomID123">
      <div className="mini-tile-container">
        <div className="sprite-mini-box">
          <img
            alt=""
            className={trade.world === 'mtgs' ? 'mtg-mini' : 'sprite-mini'}
            src={'/assets/' + trade.world + '/' + trade.tradeID + '.png'}
          ></img>
        </div>

        <div className="mini-tile-info-box">
          <div className="mini-fave-icon-container">
            <img
              alt=""
              src={'/assets/FavIconEmpty.png'}
              className="heart-mini"
            ></img>
          </div>
          <div className="mini-tile-text">{trade.pokeName}</div>
          <div className="mini-tile-text">$ {trade.price}</div>
        </div>
      </div>
    </a>
  );
}
