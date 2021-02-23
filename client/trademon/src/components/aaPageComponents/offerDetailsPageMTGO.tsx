import React, { useEffect, useState } from 'react';
import '../../styling/containers.scss';
import NavComponent from '../navComponents/navComponent';
import UserRatingComponent from '../ratingComponents/userRatingComponent';
import { MtgoTrades } from '../../utils/interfaces';
import { getOneMTGOTrade, getUserPublicDetails } from '../../utils/rest';
import { useParams } from 'react-router';
import {calcRating} from '../../utils/helperFunctions'
import Moment from 'react-moment';

//
export default function OfferDetailsPage() { 
 
 
  
  const { tradeID } : any = useParams();
  const [messageSeller, setMessageSeller] = useState(false);
  const [sellerRatingValue, setNumSellerRatingValue] = useState<number>(0);
  const [numSellerSales, setNumSellerSales] = useState<number>(0);
  const [numSellerRatings, setNumSellerRatings] = useState<number>(0);
  const [userPublicDetails, setUserPublicDetails] = useState<any>(
    {
      numberOfSales: 0,
    }
  )
  
  const [ tradeDetails, setTradeDetails] = useState<MtgoTrades>(
    {
      id:0,
      expirationDate:'',
      numViews:0,
      cardName:'String',
      cardImage:'https://res.cloudinary.com/sangad/image/upload/v1612820494/Magic_the_gathering-card_back_kavc4w.jpg',
      setName:'',
      convertedManaCost:0,
      manaCost:'',
      seller:'',
      type:'',
      subTypes:[''],
      rarity:'',
      color:[''],
      isFoil:false,
      price:0,
      tax:0,
      listingType:'sell',
      buyer:null,
      buyersOfferItemId:null,
      tradeComplete:false,
      setAcronym:'',
    }
  );
 

  useEffect(() => {
    fetchTradeDetails();
  }, []);


  async function fetchTradeDetails () {
    const tradeFetch = await getOneMTGOTrade(tradeID); 
    if (tradeFetch){
      setTradeDetails(tradeFetch);
      const sellerPublicData: any = await getUserPublicDetails(tradeFetch.UserDatumId);
      console.log(tradeFetch)
      const calculatedRating = calcRating(sellerPublicData.sellerRating);
      setNumSellerRatingValue(calculatedRating);
      setNumSellerRatings(sellerPublicData.sellerRating.length);
      setNumSellerSales(sellerPublicData.sales);
      setUserPublicDetails(sellerPublicData);
    } 
  }

  const messageHandler = () => {   
    setMessageSeller(true);
  };

  return (
    <>
      <NavComponent></NavComponent>
      <div className="offer-details-container">


          <div className="large-mtgo-container">

          <div className="large-text">#</div>
          <img
            className="large-MTGOCard"
            src={tradeDetails!.cardImage}
            alt="Mtgo Card"
          />
        </div>
        
        <div className="seller-details-container">

        <div className="flex-center">
            <img className="avatar-overlay-img" 
              src ={'/assets/avatarIcon.png'} 
              alt="avatar Icon"
            />
            <div className="standard-text">
              {tradeDetails!.seller}
            </div>
          </div>
          <div className="is-foil-box">
            {tradeDetails!.isFoil ? (
               <div className="standard-text">{'Foil: '}<input type="checkbox" className="foil-checkbox" checked readOnly/></div> 
            ) : null}          
          </div>
          <div className="standard-text">
          {tradeDetails!.seller}
          </div>
          <div className="rating-text">
            Seller Rating: 
          </div>
          <div>
            {sellerRatingValue >0?sellerRatingValue:0 }/5
          </div>
          <UserRatingComponent />

          <div className="rating-tiny-text">
            based on {numSellerRatings} ratings
          </div>
          <div className="rating-text">
            {numSellerSales} Sales
          </div>
          
        </div>
      </div>
      <div className="offer-details-container">
        <div className="interest-box">
          <div className="interest-stats">
            <div className="standard-text">Views: {tradeDetails!.numViews}</div>
            <div className="bar-spacer"> | </div>
            <div className="standard-text">3 Messaging Seller</div>
            <div className="bar-spacer"> | </div>
            <div className="standard-text">
              Expires: <Moment fromNow>{tradeDetails!.expirationDate}</Moment>
            </div>
          </div>
          <button onClick={messageHandler}>Message Seller</button>
        </div>
      </div>
    </>

  );
}

