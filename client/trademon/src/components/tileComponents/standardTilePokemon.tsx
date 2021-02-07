import React, { useEffect, useState } from 'react';
import '../../styling/tiles.scss';
import { StandardTileTrade } from '../../store/interfaces';
import { Link } from 'react-router-dom';

export default function StandardTilePokemon(trade: StandardTileTrade) {

  const [appraisalImgUrl, setAppraisalImgUrl] = useState<string>("");

  useEffect (() => {
    setAppraisalImage()
  }, []);

  const setAppraisalImage = () => {
    switch(trade.appraisal) {
      case 0 : setAppraisalImgUrl("https://res.cloudinary.com/techlog-cloud-key/image/upload/v1612705445/Star0_krjjeh.png");
        break;
      case 1 : setAppraisalImgUrl("https://res.cloudinary.com/techlog-cloud-key/image/upload/v1612705445/Star1_gvfybl.png");
        break;
      case 2 : setAppraisalImgUrl("https://res.cloudinary.com/techlog-cloud-key/image/upload/v1612705445/Star2_byidda.png");
        break;
      case 3 : setAppraisalImgUrl("https://res.cloudinary.com/techlog-cloud-key/image/upload/v1612705445/Star3_hku77d.png");
        break;
      case 4 : setAppraisalImgUrl("https://res.cloudinary.com/techlog-cloud-key/image/upload/v1612705445/Star4_ypibwp.png");
        break;
    }
  }

  return (
    <Link to={`/trade/${trade.id}`}>
      <div className="standard-tile-container">
        <div className="title-row">
          <span className="heart"></span>
          <div className="std-tile-title-text">{trade.name}</div>
          <img
            src={'/assets/FavIconEmpty.png'}
            className="heart"
            alt="Heart Icon"
          ></img>
        </div>
        <div className="main-info-row">
          <div className="sprite-row">
            <img
              className="standard-sprite"
              src={trade.image}
              alt={`${trade.name}`}
            ></img>
          </div>
          <div className="appraisal-box">
            <img className="appraisal-img"
              src= {appraisalImgUrl}
              alt={`${trade.name}`}
            />
            <p>CP {trade.level}</p>
          </div>
        </div>
        <div className="seller-row">
          <div className="seller-info">
            <img
              className="standard-avatar"
              src={'/assets/avatarIcon.png'}
              alt="avatar icon"
            ></img>
             <p className="seller-text">{trade.seller}</p>
          </div>
          <p>${trade.price}</p>
        </div>
      </div>
    </Link>
  );
}
