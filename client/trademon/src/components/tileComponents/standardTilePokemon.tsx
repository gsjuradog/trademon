import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../../styling/tiles.scss';
import { StandardTileTrade } from '../../store/interfaces';
import { Link } from 'react-router-dom';
import setAppraisalImage from '../../utils/helperFunctions';
import { RootState } from '../../store/store';

export default function StandardTilePokemon(trade: StandardTileTrade) {

  const userData = useSelector((state: RootState) => state.user.user);
  const [appraisalImgUrl, setAppraisalImgUrl] = useState<string>("");
  // const [toWatchList, setToWatchList ] = useState<boolean>(false)


  useEffect (() => {
    const appraisalURL: any = setAppraisalImage(trade.appraisal)
    setAppraisalImgUrl(appraisalURL);
  }, []);
// Add  on click - Watchlist array on userData? -- Add onClick
  return (
    <Link to={`/trade/${trade.id}`}>
      <div className="standard-tile-container">
        <div className="title-row">
          <span className="heart" onClick={() => {console.log('clicked')}}></span>  
          <div className="std-tile-title-text">{trade.name}</div>
          <img 
            src={'/assets/FavIconEmpty.png'}
            className="heart"
            alt="Heart Icon"
          ></img>
        </div>
        <div className="main-info-row">
          <div className="sprite-row">
            <img
              className="standard-sprite"
              src={trade.image}
              alt={`${trade.name}`}
            ></img>
          </div>
          <div className="appraisal-box">
            <img className="appraisal-img"
              src= {appraisalImgUrl}
              alt={`${trade.name}`}
            />
            { trade.isShiny ?
              <img className="appraisal-img"
              src= {'/assets/ShinyBadge.png'}
              alt={`${trade.name}`}
            />: <> </> }
            <p>CP {trade.level}</p>
          </div>
        </div>
        <div className="seller-row">
          <div className="seller-info">
            <img
              className="standard-avatar"
              src={'/assets/avatarIcon.png'}
              alt="avatar icon"
            ></img>
             <p className="seller-text">{trade.seller}</p>
          </div>
          <p>${trade.price}</p>
        </div>
      </div>
    </Link>
  );
}
