import React, { useEffect, useState } from 'react';
import { getTrades } from '../../utils/rest';
import StandardTile from '../tileComponents/standardTileComponent';
import '../../styling/containers.scss';

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

  useEffect((): any => {
    getTrades().then((res) => setTrades(res));
  }, []);

  console.log('trades after useEffect', trades);

  return (
    <div className="search-results">
      {trades &&
        trades.map((trade) => (
          <StandardTile key={trade.tradeID} trade={trade}></StandardTile>
        ))}
    </div>
  );
}
