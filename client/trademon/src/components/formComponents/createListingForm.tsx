import React from 'react'
import SearchBar from '../navComponents/searchComponents/searchBarComponent'
import '../../styling/containers.scss'

export default function CreateListingForm() {
  return (
    <div>
      <SearchBar></SearchBar>
      <div className="menu-title">
        Create Listing
      </div>
    </div>
  )
}
