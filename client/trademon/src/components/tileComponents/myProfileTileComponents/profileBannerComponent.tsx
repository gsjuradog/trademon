import React from 'react'
import '../../../styling/myProf.scss';
import UserRatingComponent from '../../ratingComponents/userRatingComponent';

export default function ProfileBanner() {
  return (
<div className="my-profile-containers">
    <div className="banner-container">
      <div className="profile-avatar-box">
        <img className="prof-banner-avatar" src ={'/assets/avatarIcon.png'} alt=''></img>
        <div className="prof-banner-text">Change</div>
      </div>
      <div className="my-profile-text">User12345</div>
    </div>
    <div className="banner-container">
      <div className="prof-banner-detail-text">My Seller Rating</div>
      <div className="std-flex-row">
        <div className="prof-banner-tiny-text">Based on 3 reviews</div>
        <UserRatingComponent></UserRatingComponent>
      </div>
    </div>
    <div className="banner-container">
      <div className="prof-banner-detail-text">My Buyer Rating</div>
      <div className="std-flex-row">
        <div className="prof-banner-tiny-text">Based on 9 reviews</div>
        <UserRatingComponent></UserRatingComponent>
      </div>
    </div>
    <div className="banner-container">
      <div className="prof-banner-detail-text">Pokemon Go Trainer Name</div>
      <div className="prof-banner-tiny-text">CatchMaster12</div>
    </div>
    <div className="banner-container">
      <div className="prof-banner-detail-text">Pokemon Go Trainer Code</div>
      <div className="prof-banner-tiny-text">6554-3742-1511</div>
    </div>
    <div className="banner-container">
      <div className="prof-banner-detail-text">MTGO Screen Name</div>
      <div className="prof-banner-tiny-text">BearGrills</div>
    </div>
</div>

  )
}
