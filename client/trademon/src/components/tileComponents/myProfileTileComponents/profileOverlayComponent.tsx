import React from 'react'
import '../../../styling/tiles.scss'

export default function ProfileOverlay() {
  return (
    <div className="my-profile-overlay">
      <a href={'/profile'}>
        <div className="prof-overlay-text">User12345</div>
      </a>
      <div className="profile-overlay-buttons">
        <a href={'/profile'}>
          <img className="img-med" src ={'/assets/avatarIcon.png'}/>
        </a>
        <img className="img-small" src ={'/assets/HamburgerIcon.png'}/>
      </div>
    </div>
  )
}
