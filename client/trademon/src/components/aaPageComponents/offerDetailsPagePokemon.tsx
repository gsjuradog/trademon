import React, { useEffect, useState } from 'react';
import '../../styling/containers.scss';
import SearchBar from '../navComponents/searchComponents/searchBarComponent';
import UserRatingComponent from '../ratingComponents/userRatingComponent';
import ContactSeller from './contactSeller';
import { Trades } from '../../utils/interfaces';
import { getOneTrade } from '../../utils/rest';
import { useParams } from 'react-router';
import setAppraisalImage from '../../utils/helperFunction'
//
export default function OfferDetailsPage() { 
  const { tradeID } : any = useParams();
  const [appraisalImgUrl, setAppraisalImgUrl] = useState<string>("");
  const [ tradeDetails, setTradeDetails] = useState<Trades>(
    {
      id:0,
      numViews:0, 
      seller:'Loading...', 
      pokeNum:0, 
      pokeName:'Loading...', 
      pokeGen:0, 
      pokeLvl:0, 
      pokeSprite:'Loading...',
      fastMove:'Loading...', 
      chargeMove:'Loading...', 
      isShiny:false ,
      appraisal:0, 
      price:100, 
      tax:0
    }
  );

  const [messageSeller, setMessageSeller] = useState(false);

  useEffect(() => {
    fetchTradeDetails();
  }, []) 

  async function fetchTradeDetails () {
    const tradeFetch = await getOneTrade(tradeID);
    console.log('ZAPDOS  ',tradeFetch);
    
    if (tradeFetch) {
      setTradeDetails(tradeFetch);
      const foundSpriteURL: any = setAppraisalImage(tradeDetails.appraisal)
      setAppraisalImgUrl(foundSpriteURL);
    }
  }

  const messageHandler = () => {   
    setMessageSeller(true);
  };

  if (messageSeller) {
    return (
      <ContactSeller
        tradeDetails={tradeDetails}
        setMessageSeller={setMessageSeller}/>
    )
  }

  return (
    <>
      <SearchBar></SearchBar>
      <div className="offer-details-container">
        <div className="item-details-container">
          <div className="small-text">
            ID: {tradeDetails!.id}
          </div>
          <div className="standard-text">
            {tradeDetails!.pokeName}
          </div>
          <div className="standard-text">
            CP: {tradeDetails!.pokeLvl}
          </div>
          <div className="flex-center">
            <img className="appraisal-img"
              src= {appraisalImgUrl}
              alt={`${tradeDetails.pokeName}`}
            />
            { tradeDetails.isShiny ?
              <img className="appraisal-img"
              src= {'/assets/ShinyBadge.png'}
              alt={`${tradeDetails.pokeName}`}
            />: <> </> }
          </div>
        </div>
        <div className="large-sprite-container">
          <div className="large-text">#{tradeDetails!.pokeNum}</div>
          <img className="large-sprite" src={tradeDetails!.pokeSprite} alt="Pokemon Name"/>
        </div>
        <div className="item-details-container">
          <div className="flex-center">
            <img className="avatar-overlay-img" 
              src ={'/assets/avatarIcon.png'} 
              alt="avatar Icon"
            />
            <div className="standard-text">
              {tradeDetails!.seller}
            </div>
          </div>
          <div className="rating-text">
            Seller Rating
          </div>
          <UserRatingComponent />
          <div className="rating-tiny-text">
            based on 4 ratings
          </div>
          <div className="rating-text">
            10 Sales
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
          <button onClick={messageHandler}>Message Seller</button>
        </div>
      </div>
    </>
  )
}
