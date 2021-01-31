import React from 'react';

//Redux imports
import { useDispatch, useSelector } from "react-redux";
import { testAction } from '../../redux/actions/actions';
import MiniTileContainer from '../containerComponents/miniTileContainer'

import './testComponent.scss';

const TestComponent = () => {

  const dispatch = useDispatch();

  //To get hold of current state from store, use useSelector hook
  const testState = useSelector((state:any) => state.testReducer);

  const toggle = () => {
    //const action = callAction(1);
    //dispatch(action);
    dispatch(testAction(1));  //<-- Payload sent to action, and then to reducer
  }

  return (
    <div>
      <h1>Test Component</h1>
      <h3>Test State: {testState}</h3>
      <button onClick={toggle}>CLICK ME!</button>
      <MiniTileContainer/>

    </div>
  )
}

export default TestComponent;
