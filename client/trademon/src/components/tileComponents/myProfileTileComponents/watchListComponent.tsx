import React from 'react';
import '../../../styling/myProf.scss';
import MiniTileComponent from '../miniTileComponent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import {MiniTileTrade} from '../../../store/interfaces';

export default function WatchList() {

  const userFavorites: number[] = useSelector((state:RootState) => state.user.user.watchList);
  const trades = useSelector((state:RootState) => state.trade);

  const pokeTrades= trades.pokemons;
  
  let watchListItems = pokeTrades.filter(function(item) {
    return userFavorites.includes(item.id); 
  })
  console.log('SELECTED TRADES: ',watchListItems);

  const miniTilesRender = watchListItems.map((miniTile: MiniTileTrade) => (
    <li style={{ listStyleType: 'none' }} key={miniTile.id}>
      <MiniTileComponent {...miniTile}></MiniTileComponent>
    </li>
  ));


  return (
    <div className="watch-list-container">
      <div className="watch-list-title-row">
        <div className="my-profile-text">Watch List</div>
      </div>
      <div className="watch-list-flexbox">
        {miniTilesRender}
      </div>
    </div>
  );
}
