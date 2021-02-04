import React from 'react';
import ReduxTest from '../testComponents/reduxTestComponent';
import ReduxTestList from '../testComponents/reduxTestListComponent';
import PlatformContainer from '../containerComponents/platformContainer';
import './testComponent.scss';

import { getPrivateChat } from '../../utils/graphql';


const TestComponent = () => {

  const fetchChat = async () => {
    const result = await getPrivateChat(1);
    console.log(result);
  }

  return (
    <div>
      <h1>Test Component</h1>

      <button onClick={fetchChat}>fetchChat</button>
      <ReduxTest />
      <ReduxTestList />
      <hr />
      <PlatformContainer />
    </div>
  );
};

export default TestComponent;
