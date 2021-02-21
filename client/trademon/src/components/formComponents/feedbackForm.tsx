import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import UserRatingComponent from '../ratingComponents/userRatingComponent';
import Footer from '../navComponents/footer';

import imageCard from '../../assets/pokemons/2.png';

import { tradeFeedback, alertMessage } from '../../utils/animations';

import '../../styling/forms.scss';

const FeedBackForm = () => {

  const initialState = {
    rating: 0
  }

  const history = useHistory();

  const [rating, setRating] = useState(initialState);
  const [submitButton, setSubmitButton] = useState(false);

  useEffect(() => {
    tradeFeedback();
  }, []);

  const ratingHandler = (appraisal:number) => {
    const copy = rating;
    copy.rating = appraisal;
    setRating(copy);
    setSubmitButton(true);
  }

  const feedbackHandler = () => {
    if(!submitButton){
      console.log('alert');
      alertMessage();
    } else {
      history.push('/pokemon');
    }
  }

  return (
    <>
    <div className="feedback-container">
      <div className="feedback-trade-animation">
        <img className="feedback-image" src={'/assets/trademon-logo.png'} alt="trademon-logo"></img>
        <h1 className="feedback-header">TRADE CLOSED!</h1>
      </div>
      <div className="feedback-trade-details">
        <div className="feedback-trade-details-text">
          <p>Trade ID: 20</p>
          <p>Trade Item: Boros Reckoner</p>
          <p>Trade Price: $150</p>
        </div>
        <img className="feedback-image" alt="feedback image" src={'/assets/BOROSRECKONER.jpg'}></img>
      </div>
      <div className="feedback-trade-rating">
        <p>Please rate your trading experience:</p>
        <UserRatingComponent
          ratingHandler={ratingHandler}
        />
      </div>
      <div className="submit-feedback-container">
        <p className="submit-feedback-alert">Please submit feedback!</p>
        <button onClick={feedbackHandler}>Back to Listings</button>
      </div>


    </div>
    <Footer></Footer>
    </>
  )
}

export default FeedBackForm