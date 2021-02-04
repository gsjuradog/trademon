import React, { useEffect, useState } from 'react';
import '../../styling/containers.scss';
import SearchBar from '../navComponents/searchComponents/searchBarComponent';
import UserRatingComponent from '../ratingComponents/userRatingComponent';
import { Trades } from '../../utils/interfaces';
import { getOneTrade } from '../../utils/rest';
import { useParams } from 'react-router';
//
export default function OfferDetailsPage() { 

  const { tradeID } : any = useParams();
  const [ tradeDetails, setTradeDetails] = useState<Trades>(
    {
      tradeID:0,
      numViews:0, 
      seller:'', 
      pokeNum:0, 
      pokeName:'', 
      pokeGen:0, 
      pokeLvl:0, 
      pokeSprite:'https://res.cloudinary.com/techlog-cloud-key/image/upload/v1612299771/1_ea1rrt.png',
      fastMove:'Loading', 
      chargeMove:'Loading', 
      isShiny:false ,
      appraisal:0, 
      price:0, 
      tax:0
    }
  );

  useEffect(() => {
    fetchTradeDetails();
  }, []) 

  async function fetchTradeDetails () {
    const tradeFetch = await getOneTrade(tradeID);
    if (tradeFetch) setTradeDetails(tradeFetch);
    console.log('Are We Getting Data? ', tradeDetails);
  }

  return (
    <>
      <SearchBar></SearchBar>
      <div className="offer-details-container">
        <div className="item-details-container">
          <div className="small-text">
            ID: {tradeDetails!.tradeID}
          </div>
          <div className="standard-text">
            {tradeDetails!.pokeName}
          </div>
          <div className="standard-text">
            CP: {tradeDetails!.pokeLvl}
          </div>
          <div className="rating-text">
            Appraisal: 
          </div>
          <UserRatingComponent />
          <div className="is-shiny-box">
            <div className="standard-text">
              Shiny?
            </div>
            <input type="checkbox" className="shiny-checkbox"/>
          </div>
        </div>
        <div className="large-sprite-container">
          <div className="large-text">#{tradeDetails!.pokeNum}</div>
          <img className="large-sprite" src={tradeDetails!.pokeSprite} alt="pokemon Name"/>
        </div>
        <div className="seller-details-container">
          <div className="standard-text">
            {tradeDetails!.seller}
          </div>
          <div className="rating-text">
            Seller Rating: 
          </div>
          <UserRatingComponent />
          <div className="standard-text">
            Ratings: 4
          </div>
          <div className="standard-text">
            Sales: 10
          </div>
        
        </div>
      </div>
      <div className="offer-details-container">
        <div className="interest-box">
          <div className="interest-stats">
            <div className="standard-text">
              Views: {tradeDetails!.numViews}
            </div>
            <div className="bar-spacer"> | </div>
            <div className="standard-text">
              3 Messaging Seller
            </div>
            <div className="bar-spacer"> | </div>
            <div className="standard-text">
              2h 16m left
            </div>
          </div>
          <button>Message Seller</button>
        </div>
      </div>
    </>
  )
}
