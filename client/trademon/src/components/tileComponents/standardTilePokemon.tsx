import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../../styling/tiles.scss';
import { StandardTileTrade } from '../../store/interfaces';
import { useHistory } from 'react-router-dom';
import setAppraisalImage from '../../utils/helperFunctions';
import { RootState } from '../../store/store';
import { addToWatchList } from '../../utils/rest';
export default function StandardTilePokemon(trade: StandardTileTrade) {
  const history = useHistory();
  const userData = useSelector((state: RootState) => state.user.user);
  const [appraisalImgUrl, setAppraisalImgUrl] = useState<string>('');
  const [sellerAvatarImgUrl, setSellerAvatarImgUrl] = useState<string>('');
  // const [toWatchList, setToWatchList ] = useState<boolean>(false)

  const tradeId = trade.id;
  const id = userData.id;
  const sendToWatchlist = (id: any, tradeId: any) => {
    return addToWatchList(id, tradeId);
  };
  useEffect(() => {
    const appraisalURL: any = setAppraisalImage(trade.appraisal);
    setAppraisalImgUrl(appraisalURL);
    hardCodeAvatarURLS();
  }, []);
  // Add  on click - Watchlist array on userData? -- Add onClick

  const hardCodeAvatarURLS = () => {
    switch (trade.seller) {
      case 'Dan':
        setSellerAvatarImgUrl(
          'https://res.cloudinary.com/dasb94yfb/image/upload/v1612867591/jnipffsw7a3jh4u2vk6i.png',
        );
        break;
      case 'DaltonK':
        setSellerAvatarImgUrl(
          'https://res.cloudinary.com/dasb94yfb/image/upload/v1612867732/umuentnls2jfif7xrhnw.png',
        );
        break;
      case 'Adrian':
        setSellerAvatarImgUrl(
          'https://res.cloudinary.com/dasb94yfb/image/upload/v1612867717/f0d1g6lvojruibtlen2f.png',
        );
        break;
      case 'Wlad':
        setSellerAvatarImgUrl(
          'https://res.cloudinary.com/dasb94yfb/image/upload/v1612867627/ncyipveh0cnlycbeuuu6.png',
        );
        break;
      case 'Wilfredo':
        setSellerAvatarImgUrl(
          'https://res.cloudinary.com/dasb94yfb/image/upload/v1612867739/auvjx0ppqog7pptai6zo.png',
        );
        break;
      case 'Santiago':
        setSellerAvatarImgUrl(
          'https://res.cloudinary.com/dasb94yfb/image/upload/v1612867615/ky0fvnkghak3uogjnr0s.png',
        );
        break;
      case 'Bernat':
        setSellerAvatarImgUrl('/assets/bernie.png');
        break;
      default:
        setSellerAvatarImgUrl('/assets/avatarIcon.png');
        break;
    }
  };

  return (
    <div
      className="standard-tile-container"
      onClick={() => history.push(`/Pokemon/${trade.id}`)}
    >
      <div className="title-row">
        <span className="heart"></span>
        <div className="std-tile-title-text">{trade.name}</div>
        <img
          src={'/assets/FavIconEmpty.png'}
          className="heart"
          alt="Heart Icon"
          onClick={() => {
            sendToWatchlist(tradeId, id);
          }}
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
          <img
            className="appraisal-img"
            src={appraisalImgUrl}
            alt={`${trade.name}`}
          />
          {trade.isShiny ? (
            <img
              className="appraisal-img"
              src={'/assets/ShinyBadge.png'}
              alt={`${trade.name}`}
            />
          ) : (
            <> </>
          )}
          <p>CP {trade.level}</p>
        </div>
      </div>
      <div className="seller-row">
        <div className="seller-info">
          <img
            className="standard-avatar"
            src={sellerAvatarImgUrl}
            alt="avatar icon"
          ></img>
          <p className="seller-text">{trade.seller}</p>
        </div>
        <p>${trade.price}</p>
      </div>
    </div>
  );
}
