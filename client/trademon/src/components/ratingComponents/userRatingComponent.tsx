import React from 'react';
import Rating from 'react-rating';
import { ReactComponent as RatingIconEmpty } from './rating-icon-empty.svg';
import { ReactComponent as RatingIconFull } from './rating-icon-full.svg';
import '../../styling/rating.scss';

export default function UserRatingComponent({ ratingHandler } : any) {

  const setRating = (event:any) => {
    ratingHandler(event);
  }

  return (
    <div className="rating-widget-container">
      <Rating
        onClick={e => setRating(e)}
        className="rating-widget"
        fractions={10}
        emptySymbol={<RatingIconEmpty className="rating-icon-empty" />}
        fullSymbol={<RatingIconFull className="rating-icon-full" />}
      />
    </div>
  );
}
