import React from 'react';
import UserRatingComponent from '../ratingComponents/userRatingComponent';
import Footer from '../navComponents/footer';

import '../../styling/forms.scss';

const FeedBackForm = () => {
  return (
    <>
    <div className="feedback-container">
      <div className="feedback-trade-animation">
        <h1>TRADE CLOSED!</h1>
      </div>
      <div className="feedback-trade-details">
        <h2>Trade Feedback</h2>
        <p>Trade ID</p>
        <p>Trade Item</p>
      </div>
      <div className="feedback-trade-rating">
        <p>Please rate your trading experience:</p>
        <UserRatingComponent></UserRatingComponent>
      </div>
        <button>Submit Feedback</button>

    </div>
    <Footer></Footer>
    </>
  )
}

export default FeedBackForm