import React, { useEffect } from 'react';
import MiniTileComponent from '../tileComponents/miniTileComponent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchTrades } from '../../store/tradeSlice';
import { searchQuery, fetchPokemon } from '../../store/searchSlice';
import { Trade, UTrade } from '../../store/interfaces';
import '../../styling/containers.scss';

interface IProps {
  world: string;
}

export default function PlatformContainer(props: IProps) {
  const miniTiles = useSelector((state: RootState) => state.trade);

  let miniTilesRender: any = <li>LI</li>;

  switch (props.world) {
    case 'Pokemon':
      miniTilesRender = miniTiles.pokemons.map((miniTile: UTrade) => (
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
      miniTilesRender = miniTiles.mtgs.map((miniTile: UTrade) => (
        <li
          style={{ listStyleType: 'none' }}
          key={props.world + miniTile.tradeID}
        >
          <MiniTileComponent {...miniTile}></MiniTileComponent>
          {console.log('RENDER MINI TILE: ', miniTile)}
        </li>
      ));
      break;
    default:
      miniTilesRender = <li>World of Warcraft! ... coming soon :)</li>;
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
