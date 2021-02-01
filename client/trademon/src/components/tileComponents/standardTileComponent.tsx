import React from 'react';
import '../../styling/tiles.scss';
import UserRatingComponent from '../ratingComponents/userRatingComponent';

export default function StandardTile() {
  return (
    <div className="standard-tile-container">
      <div className="title-row">
        <span className="spacer-span"></span>
        <div className="std-tile-title-text">Charmeleon</div>
        <img src={'/assets/FavIconEmpty.png'} className="heart"></img>
      </div>
      <div className="sprite-row">
        <img className="standard-sprite" src={'/assets/testSprite.png'}></img>
      </div>
      <div className="standard-info-row">
        <p>CP: 2300</p>
        <UserRatingComponent />
      </div>
      <div className="seller-row">
        <div className="seller-info">
          <img className="standard-avatar" src={'/assets/avatarIcon.png'}></img>
          <p className="seller-text">Seller123</p>
        </div>
        <p>$1</p>
      </div>
    </div>
  );
}
