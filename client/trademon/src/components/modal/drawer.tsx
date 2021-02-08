import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { gsap } from 'gsap';
import '../../styling/modal.scss';
import React from 'react';

type Props = {
  toggleHamburger: any,
  handleMouseEnter: any,
  handleMouseLeave: any
}

const Drawer = ({toggleHamburger} :Props) => {
  
  const history = useHistory();
  const [exitIcon, setExitIcon] = useState<string>('/assets/exit-icon.png');

  useEffect(() => {
    gsap.from('.hamburger-red-panel', 1, {
      x: 400
    })
    gsap.to('.hamburger-red-panel', 1, {
      opacity: 1
    })
    gsap.from('.hamburger-green-panel', 1, {
      x: 400,
      delay: 0.4
    })
    gsap.to('.hamburger-green-panel', 1, {
      opacity: 1,
      delay: 0.4
    })
    gsap.from('.hamburger-nav', 1, {
      x: 400,
      delay: 0.8
    })
    gsap.to('.hamburger-nav', 1, {
      opacity: 1,
      delay: 0.8
    })
    handleMouseLeave();
  }, [])

  const handleMouseEnter = () => {
    setExitIcon('/assets/exit-icon-hover.png');
 }
 
  const handleMouseLeave = () => {
    setExitIcon('/assets/exit-icon.png');
  }
  
  return (
    <div className="hamburger-red-panel">
      <div className="hamburger-green-panel">

        <div className="hamburger-nav">
          <img onClick={toggleHamburger} className="hamburger-exit" 
            src={exitIcon}
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseLeave}
            alt="exit Icon"
          />
          <div onClick={() => history.push(`/messages`)} 
            className="hamburger-links"
          >
            <button className="hamburger-button">Messages</button>
          </div>
          <div onClick={() => history.push(`/create-poke-trade`)} className="hamburger-links">
            <button className="hamburger-button">Create Listing</button>
          </div>
          <div onClick={() => history.push(`/profile`)} className="hamburger-links">
            <button className="hamburger-button">My Profile</button>
          </div>
          <div onClick={() => history.push(`/profile`)} className="hamburger-links">
            <button className="hamburger-button">Settings</button>
          </div>
          <div onClick={() => history.push(`/profile`)} className="hamburger-links">
            <button className="hamburger-exit-button">Logout</button>
          </div>
          <img className="hamburger-image" src={'/assets/trademon-logo.png'}></img>
          
        </div>

      </div>
    </div>

    
  )
}

export default Drawer;