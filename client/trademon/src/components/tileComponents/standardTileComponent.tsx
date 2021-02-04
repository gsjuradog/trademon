import React from 'react';
import '../../styling/tiles.scss';
import UserRatingComponent from '../ratingComponents/userRatingComponent';
import { Trades } from '../../utils/interfaces'
import { Link } from 'react-router-dom';

type trade = { 
  trade: Trades
} 

export default function StandardTile({trade}:trade) {
  return (
    <Link to={`/trade/${trade.tradeID}`}>
      <div className="standard-tile-container">
        <div className="title-row">
          <span className="heart"></span>
          <div className="std-tile-title-text">{trade.pokeName}</div>
          <img src={'/assets/FavIconEmpty.png'} className="heart" alt="Heart Icon"></img>
        </div>
        <div className="sprite-row">
          <img className="standard-sprite" src={'/assets/testSprite.png'} alt={`${trade.pokeName}`}></img>
        </div>
        <div className="standard-info-row"> 
          <p>CP: {trade.pokeLvl}</p>
          <UserRatingComponent />
        </div>
        <div className="seller-row">
          <div className="seller-info">
            <img className="standard-avatar" src={'/assets/avatarIcon.png'} alt="avatar icon"></img>
            <p className="seller-text">{trade.seller}</p>
          </div>
          <p>${trade.price}</p>
        </div>
      </div>
    </Link>
  );
}
