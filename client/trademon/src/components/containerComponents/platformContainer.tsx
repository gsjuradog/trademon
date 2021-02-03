import React, { useEffect } from 'react';
import '../../styling/containers.scss';
import MiniTileComponent from '../tileComponents/miniTileComponent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { getMiniTiles, fetchMiniTiles } from '../../store/platformSlice';

// if marker of the world = pokemon / mtg / etc. = display data acc.
interface IProps {
  world: string;
}

export default function PlatformContainer(props: IProps) {
  const miniTiles = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMiniTiles(props.world));
  }, []);

  return (
    <a href="/pokemon-go">
      <div
        className="platform-container"
        style={{
          backgroundImage:
            "linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4) ), url('assets/bg_pokemon_go.jpg')",
        }}
      >
        <div className="platform-container-title">{props.world}</div>
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
