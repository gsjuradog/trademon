import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StandardTileComponent from '../tileComponents/standardTileComponent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { StandardTileTrade } from '../../store/interfaces';
import { fetchTrades } from '../../store/standardTileSlice';
import '../../styling/containers.scss';

interface IProps {
  world: string;
}

export default function SearchResultsContainer(props: IProps) {
  const standardTiles = useSelector((state: RootState) => state.standardTrade);
  let standardTilesRender: any = <li></li>;

  switch (props.world) {
    case 'Pokemon':
      standardTilesRender = standardTiles.pokemons.map(
        (standardTile: StandardTileTrade) => (
          <li
            style={{ listStyleType: 'none' }}
            key={props.world + standardTile.tradeID}
          >
            <StandardTileComponent {...standardTile}></StandardTileComponent>
            {console.log('RENDER MINI TILE: ', standardTile)}
          </li>
        ),
      );
      break;
    case 'MTG':
      standardTilesRender = standardTiles.mtgs.map(
        (standardTile: StandardTileTrade) => (
          <li
            style={{ listStyleType: 'none' }}
            key={props.world + standardTile.tradeID}
          >
            <StandardTileComponent {...standardTile}></StandardTileComponent>
            {console.log('RENDER MINI TILE: ', standardTile)}
          </li>
        ),
      );
      break;
    default:
      break;
  }

  return (
    <Link to={`/magic-the-gathering`}>
      <div className="search-results">
        {standardTiles &&
          standardTiles.pokemons.map((trade) => (
            <StandardTileComponent
              key={trade.tradeID}
              {...trade}
            ></StandardTileComponent>
          ))}
      </div>
    </Link>
  );
}
