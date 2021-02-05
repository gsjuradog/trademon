import React, { useEffect } from 'react';
import MiniTileComponent from '../tileComponents/miniTileComponent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { searchQuery, fetchPokemon } from '../../store/searchSlice';
import { MiniTileTrade } from '../../store/interfaces';
import '../../styling/containers.scss';

interface IProps {
  world: string;
}

export default function PlatformContainer(props: IProps) {
  const miniTiles = useSelector((state: RootState) => state.trade);

  let miniTilesRender: any = <li></li>;

  switch (props.world) {
    case 'Pokemon':
      miniTilesRender = miniTiles.pokemons.map((miniTile: MiniTileTrade) => (
        <li
          style={{ listStyleType: 'none' }}
          key={props.world + miniTile.tradeID}
        >
          <MiniTileComponent {...miniTile}></MiniTileComponent>
          {console.log('RENDER MINI TILE: ', miniTile)}
        </li>
      ));
      break;
    case 'MTG':
      miniTilesRender = miniTiles.mtgs.map((miniTile: MiniTileTrade) => (
        <li
          style={{ listStyleType: 'none' }}
          key={props.world + miniTile.tradeID}
        >
          <MiniTileComponent {...miniTile}></MiniTileComponent>
          {console.log('RENDER MINI TILE: ', miniTile)}
        </li>
      ));
      break;
    case 'WoW':
      miniTilesRender = (
        <li style={{ listStyleType: 'none' }}>
          <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
            World of Warcraft! <br />
            ... coming soon &#x1F929;
          </p>
        </li>
      );
      break;
    default:
      break;
  }

  return (
    <div>
      <a href="/pokemon-go">
        <div
          className="platform-container"
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4) ), url('assets/bg_" +
              props.world +
              ".jpg')",
          }}
        >
          <div className="platform-container-title">{props.world}</div>
          <div className="platform-container-tile-box">{miniTilesRender}</div>
        </div>
      </a>
    </div>
  );
}
