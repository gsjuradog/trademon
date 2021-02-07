import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import '../../../styling/myProf.scss';
import UserRatingComponent from '../../ratingComponents/userRatingComponent';

export default function ProfileBanner() {

  const userData = useSelector((state: RootState) => state.user.user);
  const [sellerRatingValue, setSellerRatingValue] = useState<number>(0);
  const [buyerRatingValue, setBuyerRatingValue] = useState<number>(0);

  useEffect (() => {
    setSellerRating();
    setBuyerRating();
  }, []);

  const setSellerRating = () => {
    let totalRating: number = 0;
    userData.sellerRating.forEach((rating: number) => {
      totalRating += rating;
    });
    setSellerRatingValue(totalRating/userData.sellerRating.length);    
  }

  const setBuyerRating = () => {
    let totalRating: number = 0;
    userData.buyerRating.forEach((rating: number) => {
      totalRating += rating;
    });
    setBuyerRatingValue(totalRating/userData.buyerRating.length);    
  }


  return (
    <div className="my-profile-containers">
        <div className="banner-container-top">
          <div className="profile-avatar-box">
            <img className="prof-banner-avatar" src ={'/assets/avatarIcon.png'} alt=''></img>
            <div className="prof-banner-text">Change</div>
          </div>
          <div className="my-profile-text">{userData.username ? userData.username: 'none'}</div>
        </div>
        <div className="banner-container">
          <div className="prof-banner-detail-text">My Seller Rating</div>
          <div className="std-flex-row">
            <div className="prof-banner-tiny-text">Based on {userData.sellerRating.length} reviews</div>
              <div>{sellerRatingValue}/5</div>
          </div>
        </div>
        <div className="banner-container">
          <div className="prof-banner-detail-text">My Buyer Rating</div>
          <div className="std-flex-row">
            <div className="prof-banner-tiny-text">Based on {userData.buyerRating.length} reviews</div>
              <div>{buyerRatingValue}/5</div>
          </div>
        </div>
        <div className="banner-container">
          <div className="prof-banner-detail-text">Pokemon Go Trainer Name</div>
          <div className="prof-banner-tiny-text">{userData.trainerName ? userData.trainerName: 'none'}</div>
        </div>
        <div className="banner-container">
          <div className="prof-banner-detail-text">Pokemon Go Trainer Code</div>
          <div className="prof-banner-tiny-text">{userData.trainerID ? userData.trainerID: 'none'}</div>
        </div>
        <div className="banner-container">
          <div className="prof-banner-detail-text">MTGO Screen Name</div>
          <div className="prof-banner-tiny-text">{userData.mtgoName ? userData.mtgoName: 'none'}</div>
        </div>
    </div>
  )
}
