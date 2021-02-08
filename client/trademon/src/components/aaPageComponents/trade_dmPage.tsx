import React from 'react';
import DMChatTile from '../tileComponents/myProfileTileComponents/dmChatTile';
import '../../styling/containers.scss';

export default function DMPage() {
  return (
    <div className="dm-page">
      <div className="dm-container">
        <DMChatTile isOwner={true}></DMChatTile>
        <DMChatTile isOwner={false}></DMChatTile>
        <DMChatTile isOwner={true}></DMChatTile>
        <DMChatTile isOwner={false}></DMChatTile>
        <DMChatTile isOwner={true}></DMChatTile>
      </div>
    </div>
  );
}
