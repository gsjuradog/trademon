import React from 'react'
import SearchBar from '../navComponents/searchComponents/searchBarComponent'
import DMSummaryTile from '../tileComponents/myProfileTileComponents/dmSummaryTile'
import '../../styling/containers.scss'

export default function DMPage() {
  return (
    <div>
      <div>
        <SearchBar></SearchBar>
      </div>
      <div className="dm-container">
        <DMSummaryTile></DMSummaryTile>
        <DMSummaryTile></DMSummaryTile>
        <DMSummaryTile></DMSummaryTile>
        <DMSummaryTile></DMSummaryTile>
        <DMSummaryTile></DMSummaryTile>
      </div>

    </div>
  )
}
