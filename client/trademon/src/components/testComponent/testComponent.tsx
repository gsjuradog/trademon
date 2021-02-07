import React from 'react';
import TradePage from '../aaPageComponents/tradePage';
import './testComponent.scss';

import { getPrivateChats } from '../../utils/graphql';

const TestComponent = () => {
  const fetchChat = async () => {
    const result = await getPrivateChats('Santi');
    console.log(result);
  };

  return (
    <div>
      <TradePage></TradePage>
    </div>
  );
};

export default TestComponent;
