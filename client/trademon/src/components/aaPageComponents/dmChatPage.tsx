import React from 'react'
import SearchBar from '../navComponents/searchComponents/searchBarComponent'
import '../../styling/containers.scss'
import DMChatTile from '../tileComponents/myProfileTileComponents/dmChatTile'
import AddMessage from './addMessage';

export default function DMChatPage() {
  return (
    <div>
       <div>
        <SearchBar></SearchBar>
      </div>
      <div className="dm-chat-title-box">
        <a href="/messages" className="dm-back-button">
          <i className="fas fa-angle-left fa-2x"></i>
          <p>back</p>
        </a>
        <div className="dm-sender-info">
          <div className="menu-title-dm">
            Messages:
          </div>
          <img src={'/assets/avatarIcon.png'} className="img-large" alt="Avatar icon"/>
          <span className="span4"></span>
          <div className="dm-username">User54321</div>
        </div>
        <span className="span20"></span>
      </div>
      <div className="dm-chat-container">
        <DMChatTile isOwner={true}></DMChatTile>
        <DMChatTile isOwner={true}></DMChatTile>
        <DMChatTile isOwner={false}></DMChatTile>
        <DMChatTile isOwner={true}></DMChatTile>
        <DMChatTile isOwner={false}></DMChatTile>    
      </div>
      <div className="dm-add-message-container">
        <AddMessage></AddMessage>
      </div>
    </div>
  )
}
