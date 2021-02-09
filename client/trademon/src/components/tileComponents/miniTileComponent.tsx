import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MiniTileTrade } from '../../store/interfaces';
import { useHistory } from 'react-router-dom';
import '../../styling/tiles.scss';
import { addToWatchList } from '../../utils/rest';
import { RootState } from '../../store/store';
import { addFavoriteTrade } from '../../store/userSlice';

export default function MiniTile(trade: MiniTileTrade) {

  const userData = useSelector((state: RootState) => state.user.user);
  const history = useHistory();
  const [routeUrl, setRouteUrl] = useState('Pokemon');
  const dispatch = useDispatch();

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

  const addFave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(addFavoriteTrade(trade.id, userData.id));
    addToWatchList(userData.id, trade.id);
  };

  return (
    <div onClick={(event) => navigateME(event)}>


      <div className="mini-tile-container">
        <div className="sprite-mini-box">
          <img className="mtg-mini" src={trade.image} alt={trade.name}></img>
        </div>
        <div className="mini-tile-info-box">
          <div className="mini-fave-icon-container">
            <img
              src={'/assets/FavIconEmpty.png'}
              className="heart-mini"
              alt=""
              onClick={(event) => addFave(event)}
            ></img>
          </div>
          <div className="mini-tile-text">{trade.name}</div>
          <div className="mini-tile-text">$ {trade.price}</div>
        </div>
      </div>

    </div>

  );
}
