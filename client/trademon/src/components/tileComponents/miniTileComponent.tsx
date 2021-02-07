import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../store/store';
import { MiniTileTrade } from '../../store/interfaces';
import '../../styling/tiles.scss';

export default function MiniTile(trade: MiniTileTrade) {

  return (
    <a href={`/trade/${trade.id}`}>
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
