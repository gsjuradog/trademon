import '../../styling/temp_chatPage.scss';
import imageBuyer from '../../assets/users/user1.png';
import imageCard from '../../assets/pokemons/2.png';
import imageSeller from '../../assets/users/user2.png';
import badge_n3 from '../../assets/badges/_n3.png';
import badge_s2 from '../../assets/badges/_s2.png';
import badge_s3 from '../../assets/badges/_s3.png';
import badge_t1 from '../../assets/badges/_t1.png';
import badge_t2 from '../../assets/badges/_t2.png';
import badge_q2 from '../../assets/badges/_q2.png';
import badge_q3 from '../../assets/badges/_q3.png';
import badge_p2 from '../../assets/badges/_p2.png';
import { Message } from '../../utils/interfaces';
import ProfileOverlay from '../navComponents/searchComponents/profileOverlayComponent';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { io } from 'socket.io-client';
import { useHistory } from 'react-router-dom';
import DMChatTile from '../tileComponents/myProfileTileComponents/dmChatTile';
const socket = io('https://trademon.herokuapp.com' || 'http://localhost:4444');
//
export default function ChatPage() {
  const userData = useSelector((state: RootState) => state.user.user);
  const history = useHistory();
  const myRef: any = useRef(null);
  const [messageContent, setMessageContent] = useState<string>('');
  const [messagesList, setMessagesList] = useState<Message[]>([]);

  useEffect(() => {
    socket.on('newMessage', (message: any) => {
      setMessagesList((messagesList) => [...messagesList, message]);
      myRef.current.scrollIntoView();
    });
  }, [socket]);
  
  const handleKeyPress = (event:any) => {
    if(event.key === 'Enter') {
      sendChatMessage();
    }
  }

  const sendChatMessage = () => {
    console.log('send mssg ', messageContent);
    const mssgObj = {
      content: messageContent,
      sender: userData.id,
      createdAt: Date.now(),
      PrivateChatId: 1,
    };
    console.log(mssgObj);
    socket.emit('chatMessage', mssgObj);
    myRef.current.scrollIntoView();
    setMessageContent('');
  };

  const closeTradeHandler = () => {
    history.push('./feedback');
  }

  const messagesListComponent = messagesList.map((message: Message, index: number) => (
    <li
      className="dm-list-tile"
      style={{ listStyleType: 'none' }} 
      key={index}>
      {<DMChatTile {...message}></DMChatTile> }
    </li>
  ));

  return (
    <main className="right-side">
      <div className="chat-container">
        <div className="dm-page">
          <div className="dm-container" id="testID">
            {messagesListComponent}
            <div ref={myRef}></div>
          </div>
        </div>
      </div>
      <section className="user-comm">
        <textarea
          name="textarea"
          className="user-textarea"
          rows={3}
          value={messageContent}
          placeholder="Send Message..."
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessageContent(e.target.value)
          }
          onKeyPress={handleKeyPress}
        ></textarea>
        <div className="trade-button-row">
          <button
            className="offer-trade-button dm-offer-buttons"
            onClick={(): void => sendChatMessage()}
          >
            Send Message
          </button>
          <button 
            className="dm-offer-buttons"
            onClick={closeTradeHandler}>Close Trade</button>
        </div>
      </section>
    </main>
  );
}
