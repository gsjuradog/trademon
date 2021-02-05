import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrades, setWorld } from '../../store/standardTileSlice';
import SearchBar from '../navComponents/searchComponents/searchBarComponent';
import SearchResultsContainer from '../containerComponents/searchResultsContainer';

export default function MagicTheGatheringPage() {
  const world: string = 'MTG';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrades(world));
    dispatch(setWorld(world));
  }, []);
  return (
    <>
      <div>
        <SearchBar></SearchBar>
      </div>
      <div>
        <h1>{world}</h1>
        <SearchResultsContainer
          key={'MTG'}
          world={world}
        ></SearchResultsContainer>
      </div>
    </>
  );
}
