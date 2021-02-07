import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTrades } from '../../store/standardTileSlice';
import SearchBar from '../navComponents/searchComponents/searchBarComponent';
import SearchResultsContainer from '../containerComponents/searchResultsContainer';

export default function MagicTheGatheringPage() {
  const world: string = 'WoW';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrades(world));
  }, []);
  return (
    <>
      <div>
        <SearchBar></SearchBar>
      </div>
      <div>
        <h1>{world}</h1>
        <SearchResultsContainer
          key={'WoW'}
          world={world}
        ></SearchResultsContainer>
      </div>
    </>
  );
}
