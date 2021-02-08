import React, {useState} from 'react';
export default function UserRatingComponent({ ratingHandler } : any) {

  const [addWatchList, setAddtoWatchList] = useState<Boolean>(false);
  
  const addTradeToWatchList = (event:any) => {
    ratingHandler(event);
  }

  return (
  <button className="lol">
     <img onClick={() => {console.log('clicked')}}
            src={'/assets/FavIconEmpty.png'}
            className="heart"
            alt="Heart Icon"
          ></img>
  </button>
       
    

  );
}
