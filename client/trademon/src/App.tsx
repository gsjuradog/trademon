import React from 'react';
import './App.scss';
import TestTile from './components/tileComponents/testTile';
import globalTheme from './styling/globalTheme';
import TestComponent from './components/testComponent/testComponent';
import { ThemeProvider } from '@material-ui/core';


const App = () => {
  return (
    <>
      <div className="App">
      <ThemeProvider theme={globalTheme}>
        <TestComponent/>
        <TestTile></TestTile>
        <TestTile></TestTile>
        <TestTile></TestTile>
        <TestTile></TestTile>
      </ThemeProvider>
      </div>
    </>
  );
}

export default App;
