import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../../styling/tiles.scss';
import {DMSummary} from '../../../utils/interfaces'

export default function DMSummaryTile(props: DMSummary) {
  const history = useHistory();
  return (
    <>
      <div
        className="dm-summary-container"
        onClick={() => history.push(`/trade-room`)}
      >
        <div className="notification-wrapper">
          <div className="dm-summary-person-info">
            <img
              src={props.avatarUrl}
              className="img-large"
              alt="avatarIcon"
            />
            <div className="dm-summary-text-column">
              <div className="dm-text">{props.user}</div>
              <div className="dm-text-item">{props.itemName}</div>
            </div>
          </div>
          {props.hasNotification ? <img
            src={'/assets/notificationIcon.png'}
            className="img-notification"
            alt="notificationIcon"
          />: <></>}
        </div>
        <div className="dm-summary-text">
          {props.content}
        </div>
      </div>
    </>
  );
}
