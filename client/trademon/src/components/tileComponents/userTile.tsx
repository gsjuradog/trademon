import React from 'react';
import '../../styling/temp_tradePage.scss';
import imageSeller from '../../assets/mtgs/1.png';

export default function UserTile() {
  return (
    <div className="right-side rs-section" contentEditable>
      <img className="img-icon" alt="" src={imageSeller}></img>
      <p>USER</p>
    </div>
  );
}
