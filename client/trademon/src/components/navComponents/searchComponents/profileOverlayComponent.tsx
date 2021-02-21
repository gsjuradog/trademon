import React, { useState } from 'react'; //useEffect deleted until use
import '../../../styling/navs.scss';
import Backdrop from '../../modal/backdrop';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

export default function ProfileOverlay(this: any) {
  const userData = useSelector((state: RootState) => state.user.user);
  const history = useHistory();
  const [hamburgVis, setHamburgVis] = useState<boolean>(false);

  const toggleHamburger = () => {
    setHamburgVis(!hamburgVis);
  };

  if (hamburgVis) return <Backdrop toggleHamburger={toggleHamburger} />;

  return (
    <div className="my-profile-overlay">
      {userData.email === '' 
        ? 
        <div className="my-profile-overlay-link prof-overlay-text"
            onClick={() => history.push(`/login`)}
        >Log In | Sign Up
        </div>
        : 
        
        <div className="my-profile-overlay-wrapper">
          <div className="my-profile-overlay-link">   
            <div className="prof-overlay-text"
              onClick={() => history.push(`/profile`)}
            >{userData.username}</div>
    
            <img
              className="nav-overlay-img"
              onClick={() => history.push(`/profile`)}
              src={userData.avatarUrl}
              alt="avatar Icon"
            />
          </div>
          <img
            onClick={() => history.push(`/messages`)}
            className="nav-overlay-img"
            src={'/assets/ChatIcon.png'
            }
            alt="Chat Icon"
          />
          <img
            onClick={toggleHamburger}
            className="nav-overlay-img"
            src={'/assets/HamburgerNew.png'}
            alt="menu Icon"
          /> 
        </div>   
      }
    </div>
  );
};