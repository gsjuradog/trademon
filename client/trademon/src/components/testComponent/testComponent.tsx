import React from 'react';
import ReduxTest from '../testComponents/reduxTestComponent';
import ReduxTestList from '../testComponents/reduxTestListComponent';

import './testComponent.scss';

import { getUser, getPrivateChats } from '../../utils/graphql';

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
      <h1>Test Component</h1>

      <button onClick={fetchUser}>fetchUser</button>
      <button onClick={fetchChat}>fetchChat</button>
    </div>
  );
};

export default TestComponent;
