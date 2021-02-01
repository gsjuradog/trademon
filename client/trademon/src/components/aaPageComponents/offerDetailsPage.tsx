import { Checkbox } from '@material-ui/core';
import React from 'react';
import '../../styling/containers.scss';
import SearchBar from '../navComponents/searchComponents/searchBarComponent'
import UserRatingComponent from '../ratingComponents/userRatingComponent';

export default function OfferDetailsPage() {
  return (
    <>
      <SearchBar></SearchBar>
      <div className="offer-details-container">
        <div className="item-details-container">
          <div className="small-text">
            ID: 42548664
          </div>
          <div className="standard-text">
            Charmeleon
          </div>
          <div className="standard-text">
            CP: 2300
          </div>
          <div className="rating-text">
            Appraisal: 
          </div>
          <UserRatingComponent />
          <div className="is-shiny-box">
            <div className="small-text">
              Shiny?
            </div>
            <input type="checkbox" className="shiny-checkbox"/>
          </div>
        </div>
        <div className="large-sprite-container">
          <div className="large-text">#155</div>
          <img className="large-sprite" src={'/assets/testSprite.png'}/>
        </div>
        <div className="seller-details-container">
          <div className="standard-text">
            Seller12345
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
              Views: 18
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
