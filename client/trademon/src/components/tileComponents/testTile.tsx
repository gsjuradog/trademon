import React from 'react';
import '../../styling/tiles.scss';
import UserRatingComponent from '../ratingComponents/userRatingComponent';

export default function ProfileBanner() {
  return (
    <div className="tile-container-med">
      <div className="title-row">
        <span className="spacer-span"></span>
        <h3>Charmeleon</h3>
        <img src={'/assets/FavIconEmpty.png'} className="watch-list-heart"></img>
      </div>
      <div className="sprite-row">
        <img className="sprite-med" src={'/assets/testSprite.png'}></img>
      </div>
      <div className="info-row">
        <p>CP: 2300</p>
        <UserRatingComponent />
      </div>
      <div className="seller-row">
        <div className="seller-info">
          <img className="avatar-med" src={'/assets/avatarIcon.png'}></img>
          <p className="seller-text">Seller</p>
        </div>
        <p>$1</p>
      </div>
    </div>
  );
}
