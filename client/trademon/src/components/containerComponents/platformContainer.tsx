import React from 'react';
import MiniTileComponent from '../tileComponents/miniTileComponent';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { MiniTileTrade } from '../../store/interfaces';
import '../../styling/containers.scss';
import { useHistory } from 'react-router-dom';

interface IProps {
  world: string;
}

const miniTilesWow: MiniTileTrade[] = [
  {
    id: 20000,
    image: 'assets/wow/1.png',
    name: 'Stormreaver',
    price: 47.99,
    world: 'WoW',
  },
  {
    id: 20001,
    image: 'assets/wow/2.png',
    name: 'Argent Dawn Lvl 60',
    price: 37.99,
    world: 'WoW',
  },
  {
    id: 20002,
    image: 'assets/wow/3.png',
    name: 'Account lvl 60',
    price: 19.99,
    world: 'WoW',
  },
  {
    id: 20003,
    image: 'assets/wow/4.png',
    name: 'Christmas Armor',
    price: 25.99,
    world: 'WoW',
  },
];

const miniTilesRL: MiniTileTrade[] = [
  {
    id: 20000,
    image: 'assets/RL/r1.png',
    name: 'Octane ZSR',
    price: 47.99,
    world: 'RL',
  },
  {
    id: 20001,
    image: 'assets/RL/r2.png',
    name: 'Hotweels skin',
    price: 27.95,
    world: 'RL',
  },
  {
    id: 20002,
    image: 'assets/RL/r3.png',
    name: 'Komodo',
    price: 19.99,
    world: 'RL',
  },
  {
    id: 20003,
    image: 'assets/RL/r4.png',
    name: 'Maverick',
    price: 10.99,
    world: 'RL',
  },
  {
    id: 20004,
    image: 'assets/RL/r5.png',
    name: 'Burnt Sienna',
    price: 125.99,
    world: 'RL',
  },
  {
    id: 20005,
    image: 'assets/RL/r5.png',
    name: 'Plate lionWeel',
    price: 7.99,
    world: 'RL',
  },
];

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
      miniTilesRender = miniTilesWow.map((miniTile: MiniTileTrade) => (
        <li style={{ listStyleType: 'none' }} key={world + miniTile.id}>
          <MiniTileComponent {...miniTile}></MiniTileComponent>
        </li>
      ));
      break;
    case 'RocketLeague':
      miniTilesRender = miniTilesRL.map((miniTile: MiniTileTrade) => (
        <li style={{ listStyleType: 'none' }} key={world + miniTile.id}>
          <MiniTileComponent {...miniTile}></MiniTileComponent>
        </li>
      ));
      break;
    default:
      break;
  }

  const history = useHistory();
  // const handleSelectWorld = () => {
  //   console.log('CLICK EVENT IN Platform Container');
  // }; //history.push(`/${world}`);

  const navigateME = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    history.push(`/${world}`);
  };

  return (
    <div>
      <div
        className="platform-container"
        onClick={(event) => navigateME(event)}
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
