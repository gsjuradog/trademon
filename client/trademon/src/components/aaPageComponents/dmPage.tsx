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
  //let dMRender: React.ReactNode = <div className="dm-container"></div>;
  const [dms, setdms] = useState<any[]>([]);
  const [dMRender, setdMRender] = useState<React.ReactNode>(<div></div>);
  
  useEffect(() => {
    fetchDMs();
  }, []);
  useEffect(() => {
    loopDMs();
  }, [dms]);

  const fetchDMs = async () => {
    const foundDMs = await getAllChatsForUser(state.user.user.id);
    await setdms(foundDMs);
  }

  const loopDMs = () => {
    setdMRender(dms.map(
      (dmSummary: DMSummary, index:number) => {
        return <DMSummaryTile 
        key={index}
        id={dmSummary.id}
        users={dmSummary.users}
        itemId= {dmSummary.itemId}
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
        <div>
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
