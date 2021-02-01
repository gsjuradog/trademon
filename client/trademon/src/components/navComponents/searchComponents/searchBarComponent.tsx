import React from 'react'
import '../../../styling/navs.scss'
import ProfileOverlay from '../../tileComponents/myProfileTileComponents/profileOverlayComponent'

export default function SearchBar() {
  return (
    <div className="nav-container">
      <a href={'/'}>
        <div className="platform-text">trademon.io</div>
      </a>
      <div className="nav-row">
        <div className="filters-box">
          <select className="select-dropdown">
            <option value="Pokemon Go">Pokemon Go</option>
            <option value="MTG: Online">MTG: Online</option>
          </select>
          <input 
            type="text" placeholder="Search offers..." 
            id="search-field" className="search-field" 
          />
        </div>
      <ProfileOverlay></ProfileOverlay>
      </div>
    </div>
  )
}
