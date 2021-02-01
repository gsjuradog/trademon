import React from 'react'
import '../../../styling/myProf.scss';
import MiniTileComponent from '../miniTileComponent';

export default function WatchList() {
  return (
    <div className="watch-list-container">
      <div className="watch-list-title-row">
        <div className="my-profile-text">Watch List</div>
      </div>
      <div className="watch-list-flexbox">
        <MiniTileComponent></MiniTileComponent>
        <MiniTileComponent></MiniTileComponent>
        <MiniTileComponent></MiniTileComponent>
        <MiniTileComponent></MiniTileComponent>
        <MiniTileComponent></MiniTileComponent>
        <MiniTileComponent></MiniTileComponent>
        <MiniTileComponent></MiniTileComponent>
        <MiniTileComponent></MiniTileComponent>
        <MiniTileComponent></MiniTileComponent>
        <MiniTileComponent></MiniTileComponent>
      </div>
    
    </div>

  )
}