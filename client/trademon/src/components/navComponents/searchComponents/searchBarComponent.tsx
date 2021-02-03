import React from 'react'
import '../../../styling/navs.scss'
import ProfileOverlay from './profileOverlayComponent'

export default function SearchBar() {
  return (
    <div className="nav-container">

      <a className="logo-img-link" href={'/'} >
        <img className="logo-img" src={'/assets/trademon-logo.png'}/>
      </a>

      <div className="search-container-vertical">

        <h1 className="platform-text">trademon.io</h1>
        
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

      </div>
      <ProfileOverlay></ProfileOverlay>

    </div>
  )
}
