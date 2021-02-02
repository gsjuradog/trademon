import React from 'react'
import '../../../styling/navs.scss'
import ProfileOverlay from './profileOverlayComponent'

export default function SearchBar() {
  return (
    <div className="nav-container">

      <a href={'/'}>
            <img className="logo-img" src={'/assets/trademon-logo.png'}/>
      </a>

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

   

      <ProfileOverlay></ProfileOverlay>

    </div>
  )
}
