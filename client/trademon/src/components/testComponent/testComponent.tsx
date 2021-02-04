import React from 'react';
import ReduxTest from '../testComponents/reduxTestComponent';
import ReduxTestList from '../testComponents/reduxTestListComponent';

import './testComponent.scss';

import { getPrivateChat } from '../../utils/graphql';
import { createUser } from '../../utils/rest';

const TestComponent = () => {
  const newUser = () => {
    createUser('Jimbo', '4587', 'Jimbo The Pokemon Guy');
  };

  const fetchChat = async () => {
    const result = await getPrivateChat(1);
    console.log(result);
  };

  return (
    <div>
      <h1>Test Component</h1>
      <button onClick={newUser}>newUser</button>
      <button onClick={fetchChat}>fetchChat</button>
      <ReduxTest />
      <ReduxTestList />
      <hr />
    </div>
  );
};

export default TestComponent;
