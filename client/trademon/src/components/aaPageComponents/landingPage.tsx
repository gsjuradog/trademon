import React from 'react';
import PlatformContainer from '../containerComponents/platformContainer';
import SearchBar from '../navComponents/searchComponents/searchBarComponent';

export default function LandingPage() {
  // worlds - pokemon | mtg
  const worlds: string[] = ['Pokemon', 'MTG', 'etc.'];

  return (
    <>
      <div>
        <SearchBar></SearchBar>
      </div>
      <div className="platforms-container">
        <PlatformContainer world={worlds[0]}></PlatformContainer>
        <PlatformContainer world={worlds[1]}></PlatformContainer>
      </div>
    </>
  );
}
