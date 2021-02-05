import React from 'react';
import '../../styling/tiles.scss';
import UserRatingComponent from '../ratingComponents/userRatingComponent';
import { StandardTileTrade } from '../../store/interfaces';
import { Link } from 'react-router-dom';

export default function StandardTile(trade: StandardTileTrade) {
  return (
    <Link to={`/trade/${trade.tradeID}`}>
      <div className="standard-tile-container">
        <div className="title-row">
          <span className="heart"></span>
          <div className="std-tile-title-text">{trade.name}</div>
          <img
            src={'/assets/FavIconEmpty.png'}
            className="heart"
            alt="Heart Icon"
          ></img>
        </div>
        <div className="sprite-row">
          <img
            className="standard-sprite"
            src={trade.image}
            alt={`${trade.name}`}
          ></img>
        </div>
        <div className="standard-info-row">
          <p>CP: {trade.level}</p>
          <UserRatingComponent />
        </div>
        <div className="seller-row">
          <div className="seller-info">
            <img
              className="standard-avatar"
              src={'/assets/avatarIcon.png'}
              alt="avatar icon"
            ></img>
            <p className="seller-text">{trade.seller}</p>
          </div>
          <p>${trade.price}</p>
        </div>
      </div>
    </Link>
  );
}
