import React from 'react';
import '../../styling/containers.scss';
import NavComponent from '../navComponents/navComponent';
import { useParams } from 'react-router';
import TabsComponent from '../navComponents/tabsComponent';
import OfferDetailsPoke from '../containerComponents/offerDetailsPokemon'
import ChatPage from '../aaPageComponents/chatPage'
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

export default function TradePage() {
  const state = useSelector((state: RootState) => state);
  const { tradeID }: any = useParams();

  return (
    <div className="offer-details-page">
      <NavComponent></NavComponent>
      <TabsComponent></TabsComponent>
      {state.preferences.detailOrChat === true && <OfferDetailsPoke></OfferDetailsPoke>}
      {state.preferences.detailOrChat === false &&<ChatPage></ChatPage>}
    </div>
  );
}