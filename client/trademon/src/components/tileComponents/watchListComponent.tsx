import React from 'react'
import '../../styling/tiles.scss';
import '../../styling/temp-UserBanner.scss';
import MiniTileComponent from '../tileComponents/miniTileComponent';

export default function WatchList() {
  return (
    <div className="watch-list-container">
      <div className="watch-list-title-row">
        <h4>Watch List</h4>
      </div>
      <div className="watch-list-flexbox">
        <MiniTileComponent></MiniTileComponent>
        <MiniTileComponent></MiniTileComponent>
        <MiniTileComponent></MiniTileComponent>
        <MiniTileComponent></MiniTileComponent>
      </div>
    
    </div>

  )
}