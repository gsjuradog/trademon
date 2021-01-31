import React from 'react';
import '../../styling/containers.scss';
import MiniTileComponent from '../tileComponents/miniTileComponent';

export default function miniTileContainer() {
  return (
    <div
      className="container-mini-tiles"
      style={{
        backgroundImage:
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4) ), url('assets/bg_pokemon_go.jpg')",
      }}
    >
      <div className="container-mini-tile-title">
        <h1>Pokemon GO</h1>
      </div>
      <div className="container-mini-tile-box">
        <MiniTileComponent />
        <MiniTileComponent />
        <MiniTileComponent />
        <MiniTileComponent />
        <MiniTileComponent />
        <MiniTileComponent />
      </div>
    </div>
  );
}
}
