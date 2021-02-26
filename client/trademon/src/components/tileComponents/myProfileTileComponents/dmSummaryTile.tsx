import '../../../styling/tiles.scss';
import {DMSummary} from '../../../utils/interfaces'
import { RootState } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setPreferences } from '../../../store/preferencesSlice';
import { useEffect, useState } from 'react';
import { getChatById, getUserPublicDetails } from '../../../utils/rest';
  
export default function DMSummaryTile(props: DMSummary) {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const [itemName, setItemName] = useState<string>('');
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    setData();
  }, []);

  const setData = async () => {
    state.trade.pokemons.forEach(poke => {
      if (poke.id === props.itemId) setItemName(poke.name);
    });
    let foundMessages = await getChatById(props.id);
    setMessages(foundMessages)
  }

  const toggleConversationsOrChat = () => {
    console.log('SetOtherUserState: ', props.otherUser.id ,'  ', props.otherUser.name);
    dispatch(setPreferences({
      conversationsOrChat: !state.preferences.conversationsOrChat,
      currentChatId: props.id,
      currentChatItemId: props.itemId,
      currentChatOtherUser: {
        id: props.otherUser.id,
        avatarUrl: props.otherUser.avatarUrl,
        username: props.otherUser.name,
      },
      messages: messages,
    }));
  }


  return (
    <>
      <div
        className="dm-summary-container"
        onClick={toggleConversationsOrChat}
      >
        <div className="notification-wrapper">
          <div className="dm-summary-person-info">
            <img
              src={props.otherUser.avatarUrl}
              className="img-large"
              alt="avatarIcon"
            />
            <div className="dm-summary-text-column">
              <div className="dm-text">{props.otherUser.name}</div>
              <div className="dm-text-item">{itemName}</div>
            </div>
          </div>
          {true ? <img
            src={'/assets/notificationIcon.png'}
            className="img-notification"
            alt="notificationIcon"
          />: <></>}
        </div>
        <div className="dm-summary-text">
          {'testing message'}
        </div>
      </div>
    </>
  );
}
