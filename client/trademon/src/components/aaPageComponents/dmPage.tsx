import React, { useEffect, useState } from 'react'
import NavComponent from '../navComponents/navComponent'
import DMSummaryTile from '../tileComponents/myProfileTileComponents/dmSummaryTile'
import '../../styling/containers.scss'
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import ChatContainer from '../containerComponents/chatContainer';
import { getAllChatsForUser, getUserPublicDetails } from '../../utils/rest';
import { DMSummary } from '../../utils/interfaces';


export default function DMPage() {
  const state = useSelector((state: RootState) => state);
  const [dms, setdms] = useState<any[]>([]);
  const [dmUsers, setDmUsers] = useState<any>();
  const [dMRender, setdMRender] = useState<React.ReactNode>(<div></div>);
  
  useEffect(() => {
    fetchDMs();
  }, []);
  useEffect(() => {
    getUsers()
  }, [dms]);
  useEffect(() => {
    loopDMs();
  }, [dmUsers]);

  const fetchDMs = async () => {
    const foundDMs = await getAllChatsForUser(state.user.user.id);
    setdms(foundDMs);
  }

  const getUsers = async () => {
    setDmUsers( await Promise.all(dms.map(
      (dmSummary: DMSummary) => {
        let userToFetch;
        if ( state.user.user.id === dmSummary.users[0] ) userToFetch = dmSummary.users[1]
        else userToFetch = dmSummary.users[0];
        return getUserPublicDetails(userToFetch)
      }
    )));    
  }

  const loopDMs = () => {
    console.log('User data structure: ', dms);
    setdMRender(dms.map(
      (dmSummary: DMSummary, index:number) => {
        return <DMSummaryTile 
        key={index}
        id={dmSummary.id}
        itemId= {dmSummary.itemId}
        users= {dmSummary.users}
        otherUser= {{
          id: dmSummary.id,
          avatarUrl: dmUsers[index].avatarUrl,
          name: dmUsers[index].username
        }}
        ></DMSummaryTile>
      },
    ));
  }

  
  return (
    <div className="dm-page">
      <div>
        <NavComponent></NavComponent>
      </div>
      { state.preferences.conversationsOrChat ? 
        <div className="dm-summary-box">
          <div className="menu-title">
            Conversations
          </div>
          {dMRender}
        </div>
        : 
        <ChatContainer></ChatContainer>
      }

    </div>
  )
}
