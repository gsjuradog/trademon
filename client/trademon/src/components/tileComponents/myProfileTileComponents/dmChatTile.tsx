import React, { useEffect, useState } from 'react'
import '../../../styling/tiles.scss'

export default function DMChatTile(props: { isOwner: boolean; }) {
  const [isMyMessage, setIsMyMessage] = useState<boolean>(true)
  const isOwner = props.isOwner;

  useEffect( () => {
    setIsMyMessage(isOwner)
  }, [])

  return (
    <div className={`message ${(isMyMessage ? "right": "left")}`}>
      <div className="dm-text">
        This is a test message!! Let's see what happens when the message is really long. Holy balls this is a really long message. 
      </div>
      <div className="dm-timestamp"> Feb 2, 10:11 AM</div>
    </div>
  )
}
