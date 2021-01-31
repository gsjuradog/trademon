import React from 'react';
import './App.scss';
import UserRatingComponent from './components/ratingComponents/userRatingComponent';
import TestTile from './components/tileComponents/testTile';
import globalTheme from './styling/globalTheme';
import TestComponent from './components/testComponent/testComponent';
import { ThemeProvider } from '@material-ui/core';
import MyProfile from './components/containerComponents/myProfileComponent';

const App = () => {
  return (
    <>
      <div className="App">
        <ThemeProvider theme={globalTheme}>
          <TestComponent />
          <UserRatingComponent />
          <TestTile></TestTile>
          <MyProfile></MyProfile>
        </ThemeProvider>
      </div>
    </>
  );
};

export default App;
