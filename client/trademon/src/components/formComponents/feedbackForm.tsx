import React, { useEffect, useState } from 'react';
import UserRatingComponent from '../ratingComponents/userRatingComponent';
import Footer from '../navComponents/footer';

import { tradeFeedback } from '../../utils/animations';

import '../../styling/forms.scss';

const FeedBackForm = () => {

  const initialState = {
    rating: 0
  }

  const [rating, setRating] = useState(initialState);

  useEffect(() => {
    tradeFeedback();
  }, []);

  const ratingHandler = (appraisal:number) => {
    const copy = rating;
    copy.rating = appraisal;
    setRating(copy);
    console.log(rating);
  }

  return (
    <>
    <div className="feedback-container">
      <div className="feedback-trade-animation">
        <img className="feedback-image" src={'/assets/trademon-logo.png'} alt="trademon-logo"></img>
        <h1 className="feedback-header">TRADE CLOSED!</h1>
      </div>
      <div className="feedback-trade-details">
        <h2>Trade Feedback</h2>
        <p>Trade ID</p>
        <p>Trade Item</p>
      </div>
      <div className="feedback-trade-rating">
        <p>Please rate your trading experience:</p>
        <UserRatingComponent
          ratingHandler={ratingHandler}
        />
      </div>
        <button>Submit Feedback</button>

    </div>
    <Footer></Footer>
    </>
  )
}

export default FeedBackForm