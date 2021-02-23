import '../../styling/temp_chatPage.scss';
import { Message } from '../../utils/interfaces';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { io } from 'socket.io-client';
import { useHistory } from 'react-router-dom';
import DMChatTile from '../tileComponents/myProfileTileComponents/dmChatTile';
import { createChat, getChatByItemId } from '../../utils/rest';

const socket = io('https://trademon.herokuapp.com' || 'http://localhost:4444');
//
export default function ChatContainer() {
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

  // const chatHandler = async () => {
  //   setSendStatus('SENDING');
  //   const reply = await createChat(1, 2, textAreaValue);
  //   if (!reply) {
  //     setSendStatus('SEND ERROR');
  //     return;
  //   } 
  //   setSendStatus('SEND SUCCESS');
  // }

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
