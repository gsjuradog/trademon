import React from 'react';
import MiniTileContainer from '../containerComponents/miniTileContainer';
import ReduxTest from '../testComponents/reduxTestComponent';
import ReduxTestList from '../testComponents/reduxTestListComponent';
import PlatformContainer from '../containerComponents/platformContainer'
import './testComponent.scss';

const TestComponent = () => {
  return (
    <div>
      <h1>Test Component</h1>
      <ReduxTest />
      <ReduxTestList />
      <hr />
      <MiniTileContainer />
      <PlatformContainer/>
    </div>
  );
};

export default TestComponent;