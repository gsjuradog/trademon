import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styling/tiles.scss'

export default function DMSummaryTile() {
  return (
    <>
      <Link to="/chat/1234" className="dm-link">
        <div className="dm-summary-container">
          <img src={'/assets/avatarIcon.png'} className="img-large" alt=''/>
          <div className="dm-summary-text-column">
            <div className="dm-text">User54321</div>
            <div className="dm-text-item">Bulbasaur</div>
            <div className="dm-summary-text">Hey man I was thinking we could plan on 12:30 CET Time?</div>
          </div>
        </div>
      </Link>
    </>
  )
}
