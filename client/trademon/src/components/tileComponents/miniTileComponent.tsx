import React, { useState, useEffect } from 'react';
import { MiniTileTrade } from '../../store/interfaces';
import { useHistory } from 'react-router-dom';
import '../../styling/tiles.scss';

export default function MiniTile(trade: MiniTileTrade) {
  const history = useHistory();
  const [routeUrl, setRouteUrl] = useState('Pokemon');

  useEffect(() => {
    decideURL();
  }, []);

  const navigateME = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    history.push(`/${routeUrl}/${trade.id}`);
  };

  const decideURL = () => {
    if (trade.world === 'Pokemon GO') setRouteUrl('Pokemon');
    else setRouteUrl('MagicTheGathering');
  };
  return (
    <div onClick={(event) => navigateME(event)}>
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
    </div>
  );
}
