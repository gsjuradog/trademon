import React, { useEffect, useState, Fragment } from 'react';
import '../../styling/containers.scss';
import SearchBar from '../navComponents/searchComponents/searchBarComponent';
import ContactSeller from './contactSeller';
import { Trades } from '../../utils/interfaces';
import { getOnePokeTrade, getUserPublicDetails } from '../../utils/rest';
import { useParams } from 'react-router';
import setAppraisalImage, {calcRating} from '../../utils/helperFunctions';
import { PuffLoader }  from 'react-spinners';
//
export default function OfferDetailsPage() { 
  const { tradeID } : any = useParams();
  const [appraisalImgUrl, setAppraisalImgUrl] = useState<string>("");
  const [sellerRatingValue, setNumSellerRatingValue] = useState<number>(0);
  const [numSellerSales, setNumSellerSales] = useState<number>(0);
  const [numSellerRatings, setNumSellerRatings] = useState<number>(0);
  const [userPublicDetails, setUserPublicDetails] = useState<any>(
    {
      numberOfSales: 0,
    }
  )
  const [ tradeDetails, setTradeDetails] = useState<Trades>(
    {
      id:0,
      numViews:0,
      UserDatumId:0, 
      seller:'Loading...', 
      pokeNum:0, 
      pokeName:'Loading...', 
      pokeGen:0, 
      pokeLvl:0, 
      pokeSprite:'None',
      fastMove:'Loading...', 
      chargeMove:'Loading...', 
      isShiny:false ,
      appraisal:0, 
      price:100, 
      tax:0
    }
  );

  const [messageSeller, setMessageSeller] = useState(false);

  const color = '#075f59';     //Spinner colour

  useEffect(() => {
    fetchTradeDetails();
    fetchSellerDetails();
  }, []) 

  async function fetchTradeDetails () {
    const tradeFetch = await getOnePokeTrade(tradeID);
    if (tradeFetch) {
      setTradeDetails(tradeFetch);
      const foundSpriteURL: any = setAppraisalImage(tradeFetch.appraisal);
      setAppraisalImgUrl(foundSpriteURL);
      const sellerPublicData: any = await getUserPublicDetails(tradeFetch.UserDatumId);
      const calculatedRating = calcRating(sellerPublicData.sellerRating);
      setNumSellerRatingValue(calculatedRating);
      setNumSellerRatings(sellerPublicData.sellerRating.length);
      setNumSellerSales(sellerPublicData.sales);
      setUserPublicDetails(sellerPublicData);
    }
  }

  async function fetchSellerDetails () {
    //
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
    <div className="offer-details-page">
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
          {tradeDetails.pokeSprite === 'None' ? 
          <PuffLoader size={200} color={color}/> :
          <Fragment>
          <div className="large-text">#{tradeDetails!.pokeNum}</div>
          <img className="large-sprite" src={tradeDetails!.pokeSprite} alt="Pokemon Name"/> 
          </Fragment>
          }
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
          <div>
            {sellerRatingValue}/5
          </div>
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
    </div>
  )
}
