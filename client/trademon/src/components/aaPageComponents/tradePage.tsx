import '../../styling/temp_tradePage.scss';
import imageBuyer from '../../assets/users/user1.png';
import imageCard from '../../assets/mtgs/3.png';
import imageSeller from '../../assets/users/user2.png';
import badge_n3 from '../../assets/badges/_n3.png';
import badge_s2 from '../../assets/badges/_s2.png';
import badge_s3 from '../../assets/badges/_s3.png';
import badge_t1 from '../../assets/badges/_t1.png';
import badge_t2 from '../../assets/badges/_t2.png';
import badge_q2 from '../../assets/badges/_q2.png';
import badge_q3 from '../../assets/badges/_q3.png';
import badge_p2 from '../../assets/badges/_p2.png';


import Chat from './trade_dmPage';
import ProfileOverlay from '../navComponents/searchComponents/profileOverlayComponent';
import React from 'react';

export default function orga() {
  return (
    <div className="trading-container parent">
      <header className="trading-container-header">
        <div className="title-spacer"/>
        <div className="trade-room-title-text">Trading Room</div>
        <ProfileOverlay/>
      </header>
      <div className="master-trade-container">
        <div className="left-side">
          <section className="traders-container">
            <div className="trader-container">
              <img className="user_image" alt="" src={imageBuyer}></img>
              <div className="user-text-top">SANTIAGO
                <div className="user-badges">
                  <img className="user-badge" alt="" src={badge_p2}></img>
                  <img className="user-badge" alt="" src={badge_s3}></img>
                  <img className="user-badge" alt="" src={badge_t1}></img>
                  <img className="user-badge" alt="" src={badge_q2}></img>
                </div>
              </div>
            </div>
            <div className="trader-container">
              <img className="user_image" alt="" src={imageSeller}></img>
              <div className="user-text-top">WLADIMIR
                <div className="user-badges">
                  <img className="user-badge" alt="" src={badge_s2}></img>
                  <img className="user-badge" alt="" src={badge_t2}></img>
                  <img className="user-badge" alt="" src={badge_n3}></img>
                  <img className="user-badge" alt="" src={badge_q3}></img>
                </div>
              </div>
            </div>
          </section>
          <img className="trade-item-size" alt="" src={imageCard}></img>
        </div>
        <main className="right-side">
          <div className="chat-container">
            <Chat></Chat>
          </div>
          <section className="user-comm">
            <textarea
              className="user-textarea"
              rows={4}
              placeholder="Send Message..."
            ></textarea>
            <div className="trade-button-row">
              <button className="offer-trade-button dm-offer-buttons">Send Message</button>
              <button className="dm-offer-buttons">Offer Deal</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
