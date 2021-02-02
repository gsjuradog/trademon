import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom'
import '../../../styling/navs.scss'
import Backdrop from '../../modal/backdrop'

import { gsap } from 'gsap'

export default function ProfileOverlay(this: any) {

  const [hamburgVis, setHamburgVis] = useState<boolean>(false)
  const [exitIcon, setExitIcon] = useState<string>('/assets/exit-icon.png')

  // const animateHamburger = () => {
  //   if (hamburgVis === false) {
  //     gsap.from('.hamburger-nav', 1, {
  //      x: 200
  //     })
  //    } else if (hamburgVis === true) {
  //      gsap.to('.hamburger-nav', 1, {
  //        x: -200
  //       })
  //    }
  //    setTimeout(() => { setHamburgVis(!hamburgVis); }, 1000)
  // }
  

  const toggleHamburger = () => {
    //animateHamburger();
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
        <img className="img-med" src ={'/assets/avatarIcon.png'}/>
      </a>
      <img onClick={toggleHamburger} className="hamburger-img" src ={'/assets/HamburgerIcon.png'}/>
    </div>
  )
}

//{hamburgVis === true &&




