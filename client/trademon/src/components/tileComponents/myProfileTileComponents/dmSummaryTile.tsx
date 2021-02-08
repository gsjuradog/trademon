import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../../styling/tiles.scss';

export default function DMSummaryTile() {
  const history = useHistory();
  return (
    <>
      <div
        className="dm-summary-container"
        onClick={() => history.push(`/chat/1234`)}
      >
        <img
          src={'/assets/avatarIcon.png'}
          className="img-large"
          alt="avatarIcon"
        />
        <div className="dm-summary-text-column">
          <div className="dm-text">User54321</div>
          <div className="dm-text-item">Bulbasaur</div>
          <div className="dm-summary-text">
            Hey man I was thinking we could plan on 12:30 CET Time?
          </div>
        </div>
      </div>
    </>
  );
}
