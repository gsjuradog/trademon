import '../../../styling/tiles.scss';
import {DMSummary} from '../../../utils/interfaces'
import { RootState } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setPreferences } from '../../../store/preferencesSlice';
  
export default function DMSummaryTile(props: DMSummary) {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

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
