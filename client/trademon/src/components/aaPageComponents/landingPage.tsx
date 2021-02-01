import React from 'react'
import PlatformContainer from '../containerComponents/platformContainer'
import SearchBar from '../navComponents/searchComponents/searchBarComponent'

export default function LandingPage() {
  return (
    <>
      <div>
        <SearchBar></SearchBar>
      </div>
      <div className="platforms-container">
        <PlatformContainer></PlatformContainer>
        <PlatformContainer></PlatformContainer>
      </div>
    </>
  )
}
