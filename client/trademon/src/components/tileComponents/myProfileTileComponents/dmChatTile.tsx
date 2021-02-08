import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import '../../../styling/tiles.scss'
import {Message} from '../../../utils/interfaces';
import { RootState } from '../../../store/store';

export default function DMChatTile(message:Message) {
  const userData = useSelector((state: RootState) => state.user.user);
  const [isMyMessage, setIsMyMessage] = useState<boolean>(true)

  const setOwner = () => {
    if (userData.id === message.sender) {
      setIsMyMessage(true)
    } else setIsMyMessage(false)
  }
  useEffect( () => {
    setOwner();
  }, []) //added isOwner inside

  // add auto-scroll
  return (
    <div className={`message ${(isMyMessage ? "right": "left")}`}>
      <div className="dm-text">
        {message.content} 
      </div>
      <div className="dm-timestamp">{message.createdAt } </div>
    </div>
  )
}
