import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StandardTilePokemon from '../tileComponents/standardTilePokemon';
import MTGstandardTileComponent from '../tileComponents/standardTileMTGO';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { StandardTileTrade } from '../../store/interfaces';
import '../../styling/containers.scss';

interface IProps {
  world: string;
}

export default function SearchResultsContainer(props: IProps) {
  const standardTiles = useSelector((state: RootState) => state.standardTrade);

  let standardTilesRender: React.ReactNode = <li></li>;

  const world = props.world;
  console.log('--------------------- world: ', world);

  switch (world) {
    case 'Pokemon':
      standardTilesRender = standardTiles.pokemons.map(
        (standardTile: StandardTileTrade) => (
          <li
            style={{ listStyleType: 'none' }}
            key={props.world + standardTile.id}
          >
            <StandardTilePokemon {...standardTile}></StandardTilePokemon>
            {console.log('RENDER Standard TILE: ', standardTile)}
          </li>
        ),
      );
      break;
    case 'MTG':
      standardTilesRender = standardTiles.mtgs.map(
        (standardTile: StandardTileTrade) => (
          <li
            style={{ listStyleType: 'none' }}
            key={props.world + standardTile.id}
          >
            <MTGstandardTileComponent
              {...standardTile}
            ></MTGstandardTileComponent>
            {console.log(
              'RENDER Standard TILE: ',
              standardTile,
              'WORLD: ',
              world,
            )}
          </li>
        ),
      );
      break;
    case 'WoW':
      standardTilesRender = standardTiles.mtgs.map(
        (standardTile: StandardTileTrade) => (
          <li
            style={{ listStyleType: 'none' }}
            key={props.world + standardTile.id}
          >
            <StandardTilePokemon {...standardTile}></StandardTilePokemon>
            {console.log('RENDER Standard TILE: ', standardTile)}
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
