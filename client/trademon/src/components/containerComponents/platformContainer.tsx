import React from 'react';
import '../../styling/containers.scss';
import MiniTileComponent from '../tileComponents/miniTileComponent';

export default function PlatformContainer() {
  return (
    <a href="/pokemon-go">
      <div className="platform-container"
        style={{ backgroundImage:
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4) ), url('assets/bg_pokemon_go.jpg')",
        }}
      >
        <div className="platform-container-title">
          Pokemon GO
        </div>
        <div className="platform-container-tile-box">
          <MiniTileComponent />
          <MiniTileComponent />
          <MiniTileComponent />
          <MiniTileComponent />
        </div>
      </div>

    </a>
  );
}
