import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../../../styling/tiles.scss';
import { Message } from '../../../utils/interfaces';
import { RootState } from '../../../store/store';
import Moment from 'react-moment';

export default function DMChatTile(message: Message) {
  const state = useSelector((state: RootState) => state);
  const [isMyMessage, setIsMyMessage] = useState<boolean>(true);

  useEffect(() => {
    setOwner();
  }, []); //added isOwner inside

  const setOwner = () => {
    if (state.user.user.id === message.sender) {
      setIsMyMessage(true);
    } else setIsMyMessage(false);
  };
  // add auto-scroll
  return (
    <div className={`message ${isMyMessage ? 'right' : 'left'}`}>
      <div className="dm-chat-content-box">
        <div className="dm-summary-person-info">
          <img
            src={state.preferences.currentChatOtherUser.avatarUrl}
            className="img-large"
            alt="avatarIcon"
          />
          <div className="dm-summary-text-column">
            <div className="dm-text">{state.preferences.currentChatOtherUser.username}</div>
          </div>
        </div>
        <div className="dm-text">{message.content}</div>
      </div>
      <div className="dm-timestamp"><Moment fromNow>{message.createdAt}</Moment> </div>
    </div>
  );
}
