import React from 'react'
import '../../styling/tiles.scss';


export default function TestTile() {
  return (
<div className="tile-container-med">
    <div className="title-row">
      <span className="spacer-span"></span>
      <h3>Charmeleon</h3>
      <img src ={'/assets/FavIconEmpty.png'}></img>
    </div>
    <div className="sprite-row">
      <img className="sprite-med" src ={'/assets/testSprite.png'}></img>
    </div>
  <div className="info-row">
    <p>Cp: 2300</p>
    <p>Stars</p>
  </div>
  <div className="seller-row">
    <div className="seller-info">
      <img className="avatar-med" src ={'/assets/avatarIcon.png'}></img>
      <p>Seller</p>
    </div>
    <p>$1</p>
  </div>

</div>

  )
}
