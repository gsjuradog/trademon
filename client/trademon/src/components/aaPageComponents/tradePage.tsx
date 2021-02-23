import React from 'react';
import '../../styling/containers.scss';
import NavComponent from '../navComponents/navComponent';
import TabsComponent from '../navComponents/tabsComponent';
import OfferDetailsPoke from '../containerComponents/offerDetailsPokemon'
import ChatContainer from '../containerComponents/chatContainer'
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
//
export default function TradePage() {
  const state = useSelector((state: RootState) => state);

  return (
    <div className="offer-details-page">
      <NavComponent></NavComponent>
      <TabsComponent></TabsComponent>
      {state.preferences.detailOrChat === true && <OfferDetailsPoke></OfferDetailsPoke>}
      {state.preferences.detailOrChat === false &&<ChatContainer></ChatContainer>}
    </div>
  );
}