import React, { useEffect } from 'react';
import PlatformContainer from '../containerComponents/platformContainer';
import SearchBar from '../navComponents/searchComponents/searchBarComponent';
import { fetchTrades } from '../../store/miniTileSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function LandingPage() {
  const worlds: string[] = ['Pokemon', 'MTG', 'WoW', 'WoT'];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrades(worlds[0]));
    dispatch(fetchTrades(worlds[1]));
    dispatch(fetchTrades(worlds[2]));
  }, []);

  // TODO: get the worlds mapped instead of hard coded
  return (
    <>
      <div>
        <SearchBar></SearchBar>
      </div>
      <div className="platforms-container">
        <PlatformContainer key={0} world={worlds[0]}></PlatformContainer>
        <PlatformContainer key={1} world={worlds[1]}></PlatformContainer>
        <PlatformContainer key={2} world={worlds[2]}></PlatformContainer>
      </div>
    </>
  );
}
