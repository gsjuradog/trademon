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
import {Message} from '../../utils/interfaces';
import ProfileOverlay from '../navComponents/searchComponents/profileOverlayComponent';
import { useEffect, useRef, useState } from 'react';
import DMChatTile from '../tileComponents/myProfileTileComponents/dmChatTile';
import { io } from 'socket.io-client';
import React from 'react'
import { useHistory } from 'react-router-dom';
const socket = io("https://trademon.herokuapp.com/" || "http://localhost:4444");


export default function TradePage() {
  const history = useHistory();
  const myRef: any = useRef(null)
  const [messageContent, setMessageContent] = useState<string>('');
  const [messagesList, setMessagesList] = useState<Message[]>([]);

  useEffect(() => {
    
    socket.on('newMessage', (message: any)=> {
      setMessagesList((messagesList) => [...messagesList, message] );
      myRef.current.scrollIntoView() 
      console.log('Messages List: ', messagesList);
    })
  }, [socket]);

  const sendChatMessage = () => {
    const mssgObj = {
      content: messageContent,
      sender: 1,
      createdAt: Date.now(),
      PrivateChatId: 1,
    };
    socket.emit('chatMessage', mssgObj)
    myRef.current.scrollIntoView() 
  }

  const messagesListComponent = messagesList.map((message: Message, index: number) => (
    <li
      className="dm-list-tile"
      style={{ listStyleType: 'none' }} 
      key={index}>
      <DMChatTile {...message}></DMChatTile>
    </li>
  ));

  return (
    <div className="trading-container parent">
      <div className='trade-room-nav'>
        <div className="nav-container-smallerr">
          <div className="logo-img-link-smaller" onClick={(): void =>
            history.push(`/`)}
          >
            <img
              className="logo-img-smaller"
              src={'/assets/trademon-logo.png'}
              alt="trademon logo"
            />
          </div>
          <div className="search-container-vertical">
            <h1 className="platform-text">Trade Room</h1>
          </div>
          <ProfileOverlay></ProfileOverlay>
        </div>
      </div>
      <div className="master-trade-container">
        <div className="left-side">
          <section className="traders-container">
            <div className="trader-container">
              <img className="user_image" alt="" src={imageBuyer}></img>
              <div className="user-text-topp">SANTIAGO
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
              <div className="user-text-topp">WLADIMIR
                <div className="user-badges">
                  <img className="user-badge" alt="" src={badge_s2}></img>
                  <img className="user-badge" alt="" src={badge_t2}></img>
                  <img className="user-badge" alt="" src={badge_n3}></img>
                  <img className="user-badge" alt="" src={badge_q3}></img>
                </div>
              </div>
            </div>
          </section>
          <img className="trade-item-size"  alt="" src={imageCard}></img>
        </div>
        <main className="right-side">
          <div className="chat-container">
            <div className="dm-page">
            <div className="dm-container" id="testID">
              {messagesListComponent}
              <div ref={myRef} ></div>
            </div>
      </div>
          </div>
          <section className="user-comm">
            <textarea
              className="user-textarea"
              rows={3}
              placeholder="Send Message..."
              onChange={(e : React.ChangeEvent<HTMLTextAreaElement>) => setMessageContent(e.target.value)}
            ></textarea>
            <div className="trade-button-row">
              <button 
                className="offer-trade-button dm-offer-buttons"
                onClick={(): void => sendChatMessage()}
              >
                Send Message
              </button>
              <button className="dm-offer-buttons">Offer Deal</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
