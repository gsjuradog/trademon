import React from 'react';
import ReduxTest from '../testComponents/reduxTestComponent';
import ReduxTestList from '../testComponents/reduxTestListComponent';

import './testComponent.scss';

import { getPrivateChats } from '../../utils/graphql';

const TestComponent = () => {


  const fetchChat = async () => {
    const result = await getPrivateChats('Santi');
    console.log(result);
  };

  return (
    <div>
      <h1>Test Component</h1>

      <button onClick={fetchChat}>fetchChat</button>
    </div>
  );
};

export default TestComponent;
