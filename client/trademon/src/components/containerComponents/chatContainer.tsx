import '../../styling/temp_chatPage.scss';
import { Message } from '../../utils/interfaces';
import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { useHistory } from 'react-router-dom';
import DMChatTile from '../tileComponents/myProfileTileComponents/dmChatTile';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setPreferences } from '../../store/preferencesSlice';
//import { createChat, getChatByItemId } from '../../utils/rest';


const socket = io('https://trademon.herokuapp.com' || 'http://localhost:4444');
//
export default function ChatContainer() {
  const [itemName, setItemName] = useState<string>('');
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const history = useHistory();
  const myRef: any = useRef(null);
  const [messageContent, setMessageContent] = useState<string>('');
  const [messagesList, setMessagesList] = useState<Message[]>([]);

  useEffect(() => {
    loadMessages();
  }, []);
  useEffect(() => {
    socket.on('newMessage', (message: any) => {
      setMessagesList((messagesList) => [...messagesList, message]);
    });
  }, [socket]);

  useEffect(() => {
    onMessageAdd();
  }, [messagesList]);

  const onMessageAdd = () => {
    myRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    });
  }

  const  loadMessages = () => {
    state.trade.pokemons.forEach(poke => {
      if (poke.id === state.preferences.currentChatItemId) setItemName(poke.name);
    });
    setMessagesList(state.preferences.messages)
  }
  
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
      sender: state.user.user.id,
      createdAt: Date.now(),
      PrivateChatId: 1,
    };
    console.log(mssgObj);
    socket.emit('chatMessage', mssgObj)
    setMessageContent('');
  };

  const closeTradeHandler = () => {
    history.push('/feedback');
  }

  const toggleConversationsOrChat = () => {
    dispatch(setPreferences({
      conversationsOrChat: !state.preferences.conversationsOrChat,
      currentChatId: state.preferences.currentChatId,
      currentChatItemId: state.preferences.currentChatItemId,
      currentChatOtherUser: state.preferences.currentChatOtherUser,
      messages: !state.preferences.messages
    }));
  }

  const messagesListComponent = messagesList.map((message: Message, index: number) => (
    <div
      className="dm-list-tile"
      style={{ listStyleType: 'none' }} 
      key={index}>
      {<DMChatTile {...message}></DMChatTile> }
    </div>
  ));

  return (
    <>
      <div className="conversation-title-box">
        <div onClick={toggleConversationsOrChat} className="dm-back-button">
          <img className="detail-title-back-img"
            src="/assets/backIcon.png"
          ></img>
          <div>back</div>
        </div>
        <div className="conversation-title-text"
          onClick={() => {history.push(`/Pokemon/${state.preferences.currentChatItemId}`);}}
        >
          <img className="detail-title-back-img"
            src="/assets/backIcon.png"
          ></img>
          <div>{itemName}</div>
          <div></div>
        </div>
      </div>
      <main className="right-side">
        <div className="chat-container" id="testID">
          {messagesListComponent}
          <div ref={myRef}></div>
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
    </>
  );
}
