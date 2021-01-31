import React from 'react';
import './App.scss';
import globalTheme from './styling/globalTheme';
import { ThemeProvider } from '@material-ui/core';
import LandingPage from './components/containerComponents/landingPageContainer';

const App = () => {
  return (
    <>
      <div className="App">
        <ThemeProvider theme={globalTheme}>
          <LandingPage></LandingPage>
        </ThemeProvider>
      </div>
    </>
  );
};

export default App;
