import React from 'react'
import '../../styling/tiles.scss';
import '../../styling/temp-UserBanner.scss';


export default function TestTile() {
  return (
<div className="banner-container">
    <img className="img-med" src ={'/assets/avatarIcon.png'}></img>
    <h4>User12345</h4>
</div>

  )
}
