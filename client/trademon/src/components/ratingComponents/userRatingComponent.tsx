import React from 'react';
import Rating from 'react-rating';
import { ReactComponent as RatingIconEmpty } from './rating-icon-empty.svg';
import { ReactComponent as RatingIconFull } from './rating-icon-full.svg';
import '../../styling/rating.scss';

export default function UserRatingComponent() {
  return (
    <div className="rating-widget-container">
      <Rating
        className="rating-widget"
        fractions={10}
        emptySymbol={<RatingIconEmpty className="rating-icon-empty" />}
        fullSymbol={<RatingIconFull className="rating-icon-full" />}
      />
    </div>
  );
}
