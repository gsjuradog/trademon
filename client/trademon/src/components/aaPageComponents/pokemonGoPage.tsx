import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrades } from '../../store/standardTileSlice';
import { setWorld } from '../../store/worldSlice';
import { RootState } from '../../store/store';
import SearchBar from '../navComponents/searchComponents/searchBarComponent';
import SearchResultsContainer from '../containerComponents/searchResultsContainer';

export default function PokemonGoPage() {
  const worlds = useSelector((state: RootState) => state.world);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWorld(['Pokemon GO']));
  }, [dispatch]);

  dispatch(fetchTrades(worlds.toString()));

  return (
    <>
      <div>
        <SearchBar></SearchBar>
      </div>
      <div>
        <SearchResultsContainer
          key={'Pokemon GO'}
          world={worlds.toString()}
        ></SearchResultsContainer>
      </div>
    </>
  );
}
