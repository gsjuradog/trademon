import React from 'react'
import SearchBar from '../navComponents/searchComponents/searchBarComponent'
import SearchResultsContainer from '../containerComponents/searchResultsContainer';

export default function PokemonGoPage() {
  return (
    <div>
      <SearchBar></SearchBar>
      <SearchResultsContainer></SearchResultsContainer>
    </div>
  )
}
