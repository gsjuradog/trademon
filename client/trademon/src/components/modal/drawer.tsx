import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { gsap } from 'gsap';

type Props = {
  toggleHamburger: any,
  handleMouseEnter: any,
  handleMouseLeave: any
}

const Drawer = ({toggleHamburger, handleMouseEnter, handleMouseLeave} :Props) => {

  useEffect(() => {
    gsap.from('.hamburger-nav', 1, {
      x: 200
    })
    gsap.to('.hamburger-nav', 1, {
      opacity: 1
    })
  }, [])

  return (
    <div className="hamburger-nav">
        <img onClick={toggleHamburger} className="img-exit" 
          src={'./assets/exit-icon.png'}
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
        alt="exit Icon"/>
        <Link to="/messages" className="hamburger-links">
          <button className="hamburger-button">Messages</button>
        </Link>
        <Link to="/create-listing" className="hamburger-links">
          <button className="hamburger-button">Create Listing</button>
        </Link>
        <Link to="/profile" className="hamburger-links">
          <button className="hamburger-button">My Profile</button>
        </Link>
        <Link to="/profile" className="hamburger-links">
          <button className="hamburger-button">Settings</button>
        </Link>
        
      </div>
  )
}

export default Drawer;