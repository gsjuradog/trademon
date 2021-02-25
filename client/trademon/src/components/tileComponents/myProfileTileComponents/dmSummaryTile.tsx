import '../../../styling/tiles.scss';
import {DMSummary} from '../../../utils/interfaces'
import { RootState } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setPreferences } from '../../../store/preferencesSlice';
import { useEffect, useState } from 'react';
import { getUserPublicDetails } from '../../../utils/rest';
  
export default function DMSummaryTile(props: DMSummary) {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const [avatarUrl, setAvatarUrl] = useState<any>('');
  const [user, setUser] = useState<any>('');
  const [itemName, setItemName] = useState<string>('');
  
  useEffect(() => {
    setData();
  }, []);

  const setData = async () => {
    let otherUserId;
    if ( state.user.user.id === props.users[0] ) otherUserId = props.users[1]
    else otherUserId = props.users[0]
    const otherUserData:any = await getUserPublicDetails(otherUserId)
    
    state.trade.pokemons.forEach(poke => {
      if (poke.id === props.itemId) setItemName(poke.name);
    });
    setAvatarUrl(otherUserData.avatarUrl)
    setUser(otherUserData.username)
  }

  const toggleConversationsOrChat = () => {
    dispatch(setPreferences({
      conversationsOrChat: !state.preferences.conversationsOrChat,
      currentChatId: state.preferences.currentChatId,
      currentChatItemId: state.preferences.currentChatItemId,
      currentChatOtherUserId: state.preferences.currentChatId,
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
              src={avatarUrl}
              className="img-large"
              alt="avatarIcon"
            />
            <div className="dm-summary-text-column">
              <div className="dm-text">{user}</div>
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
