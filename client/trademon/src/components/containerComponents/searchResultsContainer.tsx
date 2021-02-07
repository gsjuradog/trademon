import React from 'react';
import StandardTilePokemon from '../tileComponents/standardTilePokemon';
import MTGstandardTileComponent from '../tileComponents/standardTileMTGO';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { StandardTileTrade } from '../../store/interfaces';
import '../../styling/containers.scss';

interface IProps {
  world: string;
}

export default function SearchResultsContainer(props: IProps) {
  const standardTiles = useSelector((state: RootState) => state.standardTrade);
  const world = props.world;
  let standardTilesRender: React.ReactNode = <li></li>;

  switch (world) {
    case 'Pokemon':
      standardTilesRender = standardTiles.pokemons.map(
        (standardTile: StandardTileTrade) => (
          <li style={{ listStyleType: 'none' }}
            key={props.world + standardTile.id}
          >
            <StandardTilePokemon {...standardTile}/>
          </li>
        ),
      );
      break;
    case 'MTG':
      standardTilesRender = standardTiles.mtgs.map(
        (standardTile: StandardTileTrade) => (
          <li style={{ listStyleType: 'none' }}
            key={props.world + standardTile.id}
          >
            <MTGstandardTileComponent {...standardTile}/>
          </li>
        ),
      );
      break;
    case 'WoW':
      standardTilesRender = standardTiles.mtgs.map(
        (standardTile: StandardTileTrade) => (
          <li style={{ listStyleType: 'none' }}
            key={props.world + standardTile.id}
          >
            <StandardTilePokemon {...standardTile}/>
          </li>
        ),
      );
      break;
    default:
      break;
  }
  return (
    <div className="search-results">{standardTilesRender}</div>
  );
}
