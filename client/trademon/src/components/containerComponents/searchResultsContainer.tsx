import React, { useEffect, useState } from 'react';
import { getTrades } from '../../utils/rest';
import StandardTile from '../tileComponents/standardTileComponent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import '../../styling/containers.scss';
import { fetchTrades } from '../../store/tradeSlice';

interface trades {
  tradeID: number;
  numViews: number;
  seller: string;
  pokeNum: number;
  pokeName: string;
  pokeGen: number;
  pokeLvl: number;
  pokeSprite: string;
  fastMove: string;
  chargeMove: string;
  isShiny: boolean;
  appraisal: number;
  price: number;
  tax: number;
}

export default function SearchResultsContainer() {
  const [trades, setTrades] = useState<trades[]>();

  const miniTiles = useSelector((state: RootState) => state.trade);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrades('Pokemon'));
  }, []);

  console.log('>>>> Trades after useEffect', miniTiles.pokemons);

  return (
    <div className="search-results">
      {miniTiles &&
        miniTiles.pokemons.map((trade) => (
          <StandardTile key={trade.tradeID} {...trade}></StandardTile>
        ))}
    </div>
  );
}
