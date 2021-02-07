import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { gsap } from 'gsap';
import '../../styling/modal.scss';

type Props = {
  toggleHamburger: any,
  handleMouseEnter: any,
  handleMouseLeave: any
}

const Drawer = ({toggleHamburger} :Props) => {
  
  const history = useHistory();
  const [exitIcon, setExitIcon] = useState<string>('/assets/exit-icon.png')

  useEffect(() => {
    gsap.from('.hamburger-nav', 1, {
      x: 200
    })
    gsap.to('.hamburger-nav', 1, {
      opacity: 1
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
        
      </div>
  )
}

export default Drawer;