import React from 'react'
import MiniTileContainer from '../containerComponents/miniTileContainer'
import SearchBar from '../navComponents/searchComponents/searchBarComponent'

export default function LandingPage() {
  return (
    <>
      <SearchBar></SearchBar>
      <div className="platforms-container">
        <MiniTileContainer></MiniTileContainer>
        <MiniTileContainer></MiniTileContainer>
      </div>
    </>
  )
}
