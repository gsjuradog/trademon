import React from 'react';
import '../../styling/tiles.scss';
import UserRatingComponent from '../ratingComponents/userRatingComponent';

interface trades {
  tradeID:number,
  numViews:number, 
  seller:string, 
  pokeNum:number, 
  pokeName:string, 
  pokeGen:number, 
  pokeLvl:number, 
  fastMove:string, 
  chargeMove:string, 
  isShiny:boolean ,
  appraisal:number, 
  price:number, 
  tax:number
}
type trade = { 
  trade: trades
} 

export default function StandardTile({trade}:trade) {
  return (
    <div className="standard-tile-container">
      <div className="title-row">
        <span className="heart"></span>
        <div className="std-tile-title-text">{trade.pokeName}</div>
        <img src={'/assets/FavIconEmpty.png'} className="heart"></img>
      </div>
      <div className="sprite-row">
        <img className="standard-sprite" src={'/assets/testSprite.png'}></img>
      </div>
      <div className="standard-info-row"> 
        <p>CP: {trade.pokeLvl}</p>
        <UserRatingComponent />
      </div>
      <div className="seller-row">
        <div className="seller-info">
          <img className="standard-avatar" src={'/assets/avatarIcon.png'}></img>
          <p className="seller-text">{trade.seller}</p>
        </div>
        <p>${trade.price}</p>
      </div>
    </div>
  );
}
