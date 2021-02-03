import React from 'react'
import '../../../styling/myProf.scss';

export default function ProfileBanner() {
  return (
<div className="my-profile-containers">
    <div className="banner-container">
      <div className="profile-avatar-box">
        <img className="img-med" src ={'/assets/avatarIcon.png'} alt=''></img>
        <div className="prof-overlay-text">Change</div>
      </div>
      <div className="my-profile-text">User12345</div>
    </div>
</div>

  )
}
