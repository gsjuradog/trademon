import ChatPage from '../aaPageComponents/chatPage';
import './testComponent.scss';

import { getUser, getPrivateChats } from '../../utils/graphql';
import React from 'react';

const TestComponent = () => {
  const fetchChat = async () => {
    const result = await getPrivateChats(1);
    console.log(result);
  };

  const fetchUser = async () => {
    const result = await getUser(1);
    console.log(result);
  };

  return (
    <div>
      <ChatPage/>
    </div>
  );
};

export default TestComponent;
