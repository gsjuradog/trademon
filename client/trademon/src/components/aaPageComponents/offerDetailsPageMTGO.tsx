import React, { useEffect, useState } from 'react';
import '../../styling/containers.scss';
import SearchBar from '../navComponents/searchComponents/searchBarComponent';
import UserRatingComponent from '../ratingComponents/userRatingComponent';
import { MtgoTrades } from '../../utils/interfaces';
import { getOneMTGOTrade } from '../../utils/rest';
import { useParams } from 'react-router';
import Moment from 'react-moment';
//
export default function OfferDetailsPage() { 
 


  const { tradeID } : any = useParams();

  const [ tradeDetails, setTradeDetails] = useState<MtgoTrades>(
      {
      id:0,
      expirationDate:'',
      numViews:0,
      cardName:'String',
      cardImage:'https://en.wikipedia.org/wiki/Magic:_The_Gathering#/media/File:Magic_the_gathering-card_back.jpg',
      setName:'',
      convertedManaCost:0,
      manaCost:'string',
      name:'String',
      type:'String',
      subTypes:['String'],
      rarity:'String',
      color:[''],
      isFoil:false,
      price:0,
      tax:0,
      listingType:'sell',
      buyer:null,
      buyersOfferItemId:null,
      tradeComplete:false
    }

  );
 
  useEffect(() => {
    fetchTradeDetails();
  }, []) 

  async function fetchTradeDetails () {
    const tradeFetch = await getOneMTGOTrade(tradeID); 
    if (tradeFetch) setTradeDetails(tradeFetch);
  }

  return (
    <>
      <SearchBar></SearchBar>
      <div className="offer-details-container">
        <div className="item-details-container">
          <div className="small-text"> 
            Name: {tradeDetails!.name}
          </div>
          <div className="standard-text">
            {tradeDetails!.cardName}
          </div>
          <div className="standard-text">
            Mana Cost: {tradeDetails!.manaCost}
          </div>
          <div className="rating-text">
            Rarity: 
          </div>
          <UserRatingComponent />
          <div className="is-shiny-box">
            <div className="standard-text">
              Foil:
            </div>
            <input type="checkbox" className="shiny-checkbox"/>
          </div>
        </div>
        <div className="large-sprite-container">
          <div className="large-text">#</div>
          <img className="large-MTGOCard" src={tradeDetails!.cardImage} alt="Mtgo Card"/>
        </div>
        <div className="seller-details-container">
          <div className="standard-text">
            {tradeDetails!.buyer}
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
              Expires: <Moment   fromNow>{tradeDetails!.expirationDate}</Moment>
            </div>
          </div>
          <button>Message Seller</button>
        </div>
      </div>
    </>
  )
}
