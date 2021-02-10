import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { updateUserUrl } from '../../../store/userSlice';

import '../../../styling/myProf.scss';
import { calcRating } from '../../../utils/helperFunctions';

import { avatarFormIn, avatarFormOut } from '../../../utils/animations';
import { uploadAvatarCloud, uploadAvatarServer } from '../../../utils/rest';

export default function ProfileBanner() {
  const userData = useSelector((state: RootState) => state.user.user);
  const [sellerRatingValue, setSellerRatingValue] = useState<number>(0);
  const [buyerRatingValue, setBuyerRatingValue] = useState<number>(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setSellerRating();
    setBuyerRating();
  }, []);

  const setSellerRating = () => {
    let totalRating: number = calcRating(userData.sellerRating);
    setSellerRatingValue(totalRating);
  };

  const setBuyerRating = () => {
    let totalRating: number = calcRating(userData.buyerRating);
    setBuyerRatingValue(totalRating);
  };

  const changeAvatar = () => {
    avatarFormIn();
  };

  const submitAvatar = async () => {
    const avatar = document.querySelector('.avatar-input');
    avatarFormOut();
    const url: string | undefined = await uploadAvatarCloud(
      userData.id,
      avatar,
    ); //<-- Need user from state here
    dispatch(updateUserUrl(url));
    uploadAvatarServer(userData.id, url!);
  };

  const closeAvatar = () => {
    avatarFormOut();
  };

  return (
    <div className="my-profile-containers">
      <div className="upload-avatar-form">
        <p>Upload Avatar...</p>
        <input type="file" className="avatar-input"></input>
        <div className="upload-form-btns">
          <button onClick={submitAvatar}>Submit</button>
          <button onClick={closeAvatar}>Close</button>
        </div>
      </div>
      <div className="banner-container-top">
        <div className="profile-avatar-box">
          <img
            className="prof-banner-avatar"
            src={
              userData.avatarUrl !==
              'https://res.cloudinary.com/dasb94yfb/image/upload/v1612801631/a6auhq4b9eblw0ketmlv.png'
                ? userData.avatarUrl
                : '/assets/avatarIcon.png'
            }
            alt=""
          ></img>
          <button className="change-avatar-btn" onClick={changeAvatar}>
            Change Avatar
          </button>
        </div>
        <div className="my-profile-text">
          {userData.username ? userData.username : 'No user name...'}
        </div>
      </div>
      <div className="banner-container">
        <div className="prof-banner-detail-text">My Seller Rating</div>
        <div className="std-flex-row">
          <div className="prof-banner-tiny-text">
            Based on {userData.sellerRating.length} reviews
          </div>
          <div>{sellerRatingValue ? sellerRatingValue : 0}/5</div>
        </div>
      </div>
      <div className="banner-container">
        <div className="prof-banner-detail-text">My Buyer Rating</div>
        <div className="std-flex-row">
          <div className="prof-banner-tiny-text">
            Based on {userData.buyerRating.length} reviews
          </div>
          <div>{buyerRatingValue ? buyerRatingValue : 0}/5</div>
        </div>
      </div>
      <div className="banner-container">
        <div className="prof-banner-detail-text">Pokemon Go Trainer Name</div>
        <div className="prof-banner-tiny-text">
          {userData.trainerName ? userData.trainerName : 'none'}
        </div>
      </div>
      <div className="banner-container">
        <div className="prof-banner-detail-text">Pokemon Go Trainer Code</div>
        <div className="prof-banner-tiny-text">
          {userData.trainerID ? userData.trainerID : 'none'}
        </div>
      </div>
      <div className="banner-container">
        <div className="prof-banner-detail-text">MTGO Screen Name</div>
        <div className="prof-banner-tiny-text">
          {userData.mtgoName ? userData.mtgoName : 'none'}
        </div>
      </div>
    </div>
  );
}
