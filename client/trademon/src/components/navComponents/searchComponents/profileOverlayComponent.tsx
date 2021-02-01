import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import '../../../styling/navs.scss'

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

  return (
    <div className="my-profile-overlay">
      <a href={'/profile'}>
        <div className="prof-overlay-text">User12345</div>
      </a>
      <div className="profile-overlay-buttons">
        <a href={'/profile'}>
          <img className="img-med" src ={'/assets/avatarIcon.png'}/>
        </a>
        <img onClick={toggleHamburger} className="hamburger-img" src ={'/assets/HamburgerIcon.png'}/>
      </div>
      {hamburgVis === true && 
        <div className="hamburger-nav">
        <img onClick={toggleHamburger} className="img-exit" 
          src={exitIcon}
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
        />
        <Link to="/messages" className="hamburger-links">
          <button className="hamburger-button">Messages</button>
        </Link>
        <Link to="/create-listing" className="hamburger-links">
          <button className="hamburger-button">Create Listing</button>
        </Link>
        <Link to="/profile" className="hamburger-links">
          <button className="hamburger-button">My Profile</button>
        </Link>
        <Link to="/messages" className="hamburger-links">
          <button className="hamburger-button">Settings</button>
        </Link>
        
      </div>
      }
    </div>
  )
}
