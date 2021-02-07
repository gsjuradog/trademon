import React, { useEffect } from 'react';
import PlatformContainer from '../containerComponents/platformContainer';
import SearchBar from '../navComponents/searchComponents/searchBarComponent';
import { fetchTrades } from '../../store/miniTileSlice';
import { setWorld } from '../../store/worldSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';

export default function LandingPage() {
  const worlds = useSelector((state: RootState) => state.world);
  const dispatch = useDispatch();

  worlds.forEach((world) => dispatch(fetchTrades(world)));

  useEffect(() => {
    dispatch(setWorld(['Pokemon', 'MTG', 'WoW', 'WoT']));
  }, [dispatch]);

  return (
    <>
      <div>
        <SearchBar></SearchBar>
      </div>
      <div className="platforms-container">
        {worlds.map((world) => (
          <PlatformContainer key={0} world={world}></PlatformContainer>
        ))}

        {/* <PlatformContainer key={1} world={worlds[1]}></PlatformContainer>
        <PlatformContainer key={2} world={worlds[2]}></PlatformContainer> */}
      </div>
    </>
  );
}
