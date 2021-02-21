import React from 'react'
import NavComponent from '../navComponents/navComponent'
import DMSummaryTile from '../tileComponents/myProfileTileComponents/dmSummaryTile'
import '../../styling/containers.scss'




export default function DMPage() {
  return (
    <div className="dm-page">
      <div>
        <NavComponent></NavComponent>
      </div>
      <div className="menu-title">
        My Trades
      </div>
      <div className="dm-container">
        <DMSummaryTile 
          user={'Dalton'}
          itemName= {'Charizard'}
          content={'Hey do you think you will be able to meet up in the next 30 mins?'}
          avatarUrl={'https://res.cloudinary.com/dasb94yfb/image/upload/v1612867732/umuentnls2jfif7xrhnw.png'}
          hasNotification={true}
        ></DMSummaryTile>
        <DMSummaryTile 
          user={'Dan'}
          itemName= {'Necropolis Fiend'}
          content={'Hey there! Are you available to chat?'}
          avatarUrl={'https://res.cloudinary.com/dasb94yfb/image/upload/v1612867591/jnipffsw7a3jh4u2vk6i.png'}
          hasNotification={false}
        ></DMSummaryTile>
                <DMSummaryTile 
          user={'Santiago'}
          itemName= {'Mew'}
          content={'No way man, Im not about that. Too expensive'}
          avatarUrl={'https://res.cloudinary.com/dasb94yfb/image/upload/v1612867615/ky0fvnkghak3uogjnr0s.png'}
          hasNotification={false}
        ></DMSummaryTile>
                <DMSummaryTile 
          user={'Wilfredo'}
          itemName= {'Blaziken'}
          content={'No way thats actually really cool. I am very interested.'}
          avatarUrl={'https://res.cloudinary.com/dasb94yfb/image/upload/v1612867739/auvjx0ppqog7pptai6zo.png'}
          hasNotification={true}
        ></DMSummaryTile>
                <DMSummaryTile 
          user={'Wlad'}
          itemName= {'Yuriko, the Tigers Shadow (Commander)'}
          content={'I am looking for this card for 2 years already!'}
          avatarUrl={'https://res.cloudinary.com/dasb94yfb/image/upload/v1612867627/ncyipveh0cnlycbeuuu6.png'}
          hasNotification={false}
        ></DMSummaryTile>
      </div>

    </div>
  )
}
