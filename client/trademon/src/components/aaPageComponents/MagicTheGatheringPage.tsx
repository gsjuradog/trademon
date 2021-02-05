import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrades } from '../../store/standardTileSlice';
import SearchBar from '../navComponents/searchComponents/searchBarComponent';
import SearchResultsContainer from '../containerComponents/searchResultsContainer';

export default function MagicTheGatheringPage() {
  const world: string = 'MTG';
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
        <SearchResultsContainer
          key={'MTG'}
          world={world}
        ></SearchResultsContainer>
      </div>
    </>
  );
}
