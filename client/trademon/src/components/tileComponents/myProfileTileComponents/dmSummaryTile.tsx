import React from 'react'

export default function DMSummaryTile() {
  return (
    <>
      <div className="dm-summary-container">
        <img src={'/assets/avatarIcon.png'} className="img-med"/>
        <div className="dm-summary-text-column">
          <div className="dm-text">User54321</div>
          <div className="dm-text">Bulbasaur</div>
          <div className="dm-summary-text">Hey man I was thinking we could plan on 12:30 CET Time?</div>
        </div>
      </div>
    </>
  )
}
