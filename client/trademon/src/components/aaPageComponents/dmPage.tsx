import React, { useEffect, useState } from 'react'
import NavComponent from '../navComponents/navComponent'
import DMSummaryTile from '../tileComponents/myProfileTileComponents/dmSummaryTile'
import '../../styling/containers.scss'
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import ChatContainer from '../containerComponents/chatContainer';
import { getAllChatsForUser } from '../../utils/rest';
import { DMSummary } from '../../utils/interfaces';


export default function DMPage() {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  let dMConversationsRender: React.ReactNode = <li></li>;
  const [dms, setdms] = useState<any>([]);

  useEffect(() => {
    fetchDMs();
  }, []);

  const fetchDMs = async () => {
    console.log('FWhat user am i calling with? ', state.user.user.id)
    const foundDMs = await getAllChatsForUser(state.user.user.id);
    setdms(foundDMs);
    console.log('Fetched DMs ', foundDMs)
    dMConversationsRender = dms.map((dmSummary: DMSummary) => (
      <DMSummaryTile 
        user={dmSummary.user}
        itemName= {dmSummary.itemName}
        content={dmSummary.content}
        avatarUrl={dmSummary.avatarUrl}
        hasNotification={false}
      ></DMSummaryTile>
    ));
  }

  
  return (
    <div className="dm-page">
      <div>
        <NavComponent></NavComponent>
      </div>
      { state.preferences.conversationsOrChat ? 
        <div>
          <div className="menu-title">
            Conversations
          </div>
          <div className="dm-container">
            <DMSummaryTile 
              user={'Dalton'}
              itemName= {'Charizard'}
              content={'Hey do you think you will be able to meet up in the next 30 mins?'}
              avatarUrl={'https://res.cloudinary.com/dasb94yfb/image/upload/v1612867732/umuentnls2jfif7xrhnw.png'}
              hasNotification={true}
            ></DMSummaryTile>
            {dMConversationsRender}
          </div>
        </div>
        : 
        <ChatContainer></ChatContainer>
      }

    </div>
  )
}
