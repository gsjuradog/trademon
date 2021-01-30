//Import all our reducers here
import { testReducer } from './testReducer';

//Import combineReducers from Redux
import { combineReducers } from 'redux';


//Combine all reducers and export to store in index.tsx
const allReducers = combineReducers({
  testReducer : testReducer
});

export { allReducers };