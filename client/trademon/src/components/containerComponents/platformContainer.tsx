import React, { useEffect } from 'react';
import MiniTileComponent from '../tileComponents/miniTileComponent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { searchQuery, fetchPokemon } from '../../store/searchSlice';
import { MiniTileTrade } from '../../store/interfaces';
import '../../styling/containers.scss';
import { useHistory } from 'react-router-dom';

interface IProps {
  world: string;
}

export default function PlatformContainer(props: IProps) {
  const miniTiles = useSelector((state: RootState) => state.trade);

  const world = props.world;
  let miniTilesRender: React.ReactNode = <li></li>;

  switch (world) {
    case 'Pokemon GO':
      miniTilesRender = miniTiles.pokemons.map((miniTile: MiniTileTrade) => (
        <li style={{ listStyleType: 'none' }} key={world + miniTile.id}>
          <MiniTileComponent {...miniTile}></MiniTileComponent>
        </li>
      ));
      break;
    case 'MTGO':
      miniTilesRender = miniTiles.mtgs.map((miniTile: MiniTileTrade) => (
        <li style={{ listStyleType: 'none' }} key={world + miniTile.id}>
          <MiniTileComponent {...miniTile}></MiniTileComponent>
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

  const history = useHistory();
  const handleSelectWorld = () => history.push(`/${world}`);

  return (
    <div>
      <div
        className="platform-container"
        onClick={(e: React.MouseEvent<HTMLDivElement>): void =>
          handleSelectWorld()
        }
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
    </div>
  );
}
