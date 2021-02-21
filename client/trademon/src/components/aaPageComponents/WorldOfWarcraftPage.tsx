import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTrades } from '../../store/standardTileSlice';
import NavComponent from '../navComponents/navComponent';
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
        <NavComponent></NavComponent>
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
