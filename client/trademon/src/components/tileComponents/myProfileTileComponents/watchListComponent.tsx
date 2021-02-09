import React from 'react';
import '../../../styling/myProf.scss';
import MiniTileComponent from '../miniTileComponent';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

export default function WatchList() {
  const worlds = useSelector((state: RootState) => state.world);
  const userData = useSelector((state: RootState) => state.user.user);

  return (
    <div className="watch-list-container">
      <div className="watch-list-title-row">
        <div className="my-profile-text">Watch List</div>
      </div>
      <div className="watch-list-flexbox">
        {/* <MiniTileComponent></MiniTileComponent> */}
      </div>
    </div>
  );
}
