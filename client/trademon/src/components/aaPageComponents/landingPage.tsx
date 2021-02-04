import React from 'react';
import PlatformContainer from '../containerComponents/platformContainer';
import SearchBar from '../navComponents/searchComponents/searchBarComponent';

export default function LandingPage() {
  const worlds: string[] = ['Pokemon', 'MTG', 'WoW', 'WoT'];

  // TODO: get the worlds mapped instead of hard coded
  return (
    <>
      <div>
        <SearchBar></SearchBar>
      </div>
      <div className="platforms-container">
        <PlatformContainer key={1} world={worlds[0]}></PlatformContainer>
        <PlatformContainer key={2} world={worlds[1]}></PlatformContainer>
        <PlatformContainer key={3} world={worlds[2]}></PlatformContainer>
      </div>
    </>
  );
}
