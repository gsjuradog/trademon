import React, { useEffect } from 'react';
import MiniTileComponent from '../tileComponents/miniTileComponent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { getMiniTiles, fetchMiniTiles } from '../../store/platformSlice';
import { searchQuery, fetchPokemon } from '../../store/searchSlice';
import { Trade } from '../../store/interfaces';
import '../../styling/containers.scss';
interface IProps {
  world: string;
}

export default function PlatformContainer(props: IProps) {
  const miniTiles = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchQuery(props.world));
    dispatch(fetchPokemon('1', '1'));
    console.log(`PLATFORM UseEffect (after render):`, miniTiles);
  }, [dispatch, miniTiles, props.world]);

  const miniTilesRender = miniTiles.map((miniTile: Trade) => (
    <li style={{ listStyleType: 'none' }} key={props.world + miniTile.tradeID}>
      {props.world === 'Pokemon' ? (
        <MiniTileComponent world={'pokemons'} {...miniTile}></MiniTileComponent>
      ) : (
        <MiniTileComponent world={'mtgs'} {...miniTile}></MiniTileComponent>
      )}
    </li>
  ));

  return (
    <div>
      {/* <a href="/pokemon-go"> */}
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
      {/* </a> */}
    </div>
  );
}
