import React, { useState } from 'react';  //useEffect deleted until use
import '../../../styling/navs.scss';
import Backdrop from '../../modal/backdrop';

export default function ProfileOverlay(this: any) {

  const [hamburgVis, setHamburgVis] = useState<boolean>(false)
  const [exitIcon, setExitIcon] = useState<string>('/assets/exit-icon.png')

  const toggleHamburger = () => {
    setHamburgVis(!hamburgVis);
    handleMouseLeave();
  }

  const handleMouseEnter = () => {
    setExitIcon('/assets/exit-icon-hover.png');
 }
 
  const handleMouseLeave = () => {
    setExitIcon('/assets/exit-icon.png');
  }

  if (hamburgVis) return (
    <Backdrop
    toggleHamburger={toggleHamburger}
    handleMouseEnter={handleMouseEnter}
    handleMouseLeave={handleMouseLeave}
    />
  )

  return (
    <div className="my-profile-overlay">
      <a href={'/profile'} className="my-profile-overlay-link">
        <div className="prof-overlay-text">User12345</div>
        <img className="avatar-overlay-img" src ={'/assets/avatarIcon.png'} alt="avatar Icon"/>
      </a>
      <img onClick={toggleHamburger} className="hamburger-img" src ={'/assets/HamburgerIcon.png'} alt="menu Icon"/>
    </div>
  )
}

//{hamburgVis === true &&




