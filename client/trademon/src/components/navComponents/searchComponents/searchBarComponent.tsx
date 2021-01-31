import React from 'react'
import '../../../styling/navs.scss'
export default function SearchBar() {
  return (
    <div className="search-container">
      <div className="platform-text">trademon.io</div>
      <div className="filters-box">
        <select className="select-dropdown">
          <option value="Platform">Platform</option>
        </select>
        <input type="text" placeholder="Search offers..." id="search-field" className="search-field"></input>
        
      </div>
    </div>
  )
}
