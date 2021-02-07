import React, { useState } from 'react';  //useEffect deleted until use
import '../../../styling/navs.scss';
import Backdrop from '../../modal/backdrop';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

export default function ProfileOverlay(this: any) {
  const userData = useSelector((state: RootState) => state.user.user);
  const history = useHistory();
  const [hamburgVis, setHamburgVis] = useState<boolean>(false)

  const toggleHamburger = () => {
    setHamburgVis(!hamburgVis);
  }

  if (hamburgVis) return (
    <Backdrop
    toggleHamburger={toggleHamburger}
    />
  )
  
  return (
    <div className="my-profile-overlay">
      <div onClick={() => history.push(`/profile`)}
        className="my-profile-overlay-link"
      >
        <div className="prof-overlay-text">{userData.username}</div>
        <img className="avatar-overlay-img" src ={'/assets/avatarIcon.png'} alt="avatar Icon"/>
      </div>
      <img onClick={toggleHamburger} className="hamburger-img" src ={'/assets/HamburgerIcon.png'} alt="menu Icon"/>
    </div>
  )
}

//{hamburgVis === true &&




