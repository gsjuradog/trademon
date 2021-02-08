import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../../styling/tiles.scss';
import { StandardTileTrade } from '../../store/interfaces';
import { useHistory } from 'react-router-dom';
import setAppraisalImage from '../../utils/helperFunctions';
import { RootState } from '../../store/store';
import {addToWatchList} from '../../utils/rest';
export default function StandardTilePokemon(trade: StandardTileTrade) {

  const history = useHistory();
  const userData = useSelector((state: RootState) => state.user.user);
  const [appraisalImgUrl, setAppraisalImgUrl] = useState<string>(""); 
  // const [toWatchList, setToWatchList ] = useState<boolean>(false)
  
  const tradeId= trade.id;
  const id = userData.id; 
  const sendToWatchlist = (id: any, tradeId: any) => {
   return addToWatchList(id, tradeId);
  }
  useEffect (() => {
    const appraisalURL: any = setAppraisalImage(trade.appraisal);
    setAppraisalImgUrl(appraisalURL);
  }, []);
// Add  on click - Watchlist array on userData? -- Add onClick
  return (
    // <Link to={`/trade/${trade.id}`}>
      <div className="standard-tile-container">
        <div className="title-row">
          <span className="heart" ></span>  
          <div className="std-tile-title-text" onClick={() => history.push(`/trade/${trade.id}`)}>{trade.name}</div>
          <button onClick={() => {sendToWatchlist(tradeId,id)}}>
          <img 
            src={'/assets/FavIconEmpty.png'}
            className="heart"
            alt="Heart Icon"
            ></img>
            </button>
        </div>
        <div className="main-info-row" onClick={() => history.push(`/trade/${trade.id}`)}>
          <div className="sprite-row" onClick={() => history.push(`/trade/${trade.id}`)}>
            <img
              className="standard-sprite"
              src={trade.image}
              alt={`${trade.name}`}
            ></img>
          </div>
          <div className="appraisal-box" onClick={() => history.push(`/trade/${trade.id}`)}>
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
        <div className="seller-row" onClick={() => history.push(`/trade/${trade.id}`)}>
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
    // </Link>
  );
}
