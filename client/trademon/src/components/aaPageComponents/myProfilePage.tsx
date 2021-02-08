import React from 'react'
import ProfileBanner from '../tileComponents/myProfileTileComponents/profileBannerComponent'
import WatchList from '../tileComponents/myProfileTileComponents/watchListComponent'
import MyOffers from '../tileComponents/myProfileTileComponents/myOffersComponent'
import SearchBar from '../navComponents/searchComponents/searchBarComponent'
import Footer from '../navComponents/footer';
import '../../styling/containers.scss'

export default function MyProfile() {
  return (
    <div>
      <SearchBar></SearchBar>
      <div className="menu-title">
        My Profile
      </div>
      <div className="my-profile-container">
        <ProfileBanner></ProfileBanner>
        <WatchList></WatchList>
        <MyOffers></MyOffers>
        <Footer/>
      </div>
    </div>
  )
}
