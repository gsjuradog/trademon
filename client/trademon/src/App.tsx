import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import LandingPage from './components/aaPageComponents/landingPage';
import MyProfile from './components/aaPageComponents/myProfilePage';
import PokemonGoPage from './components/aaPageComponents/pokemonGoPage'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/"     exact component={LandingPage}/>
          <Route path="/profile"    component={MyProfile}/>
          <Route path="/pokemon-go" component={PokemonGoPage}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
