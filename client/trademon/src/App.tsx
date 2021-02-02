import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import LandingPage from './components/aaPageComponents/landingPage';
import MyProfile from './components/aaPageComponents/myProfilePage';
import PokemonGoPage from './components/aaPageComponents/pokemonGoPage'
import OfferDetailsPage from './components/aaPageComponents/offerDetailsPage'
import TestPage from './components/testComponent/testComponent';
import DMPage from './components/aaPageComponents/dmPage'
import DMChatPage from './components/aaPageComponents/dmChatPage'
import CreateListingForm from './components/formComponents/createListingForm'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/"            exact component={LandingPage}/>
          <Route path="/offer/randomID123" component={OfferDetailsPage}/>
          <Route path="/profile"           component={MyProfile}/>
          <Route path="/create-listing"    component={CreateListingForm}/>
          <Route path="/messages"          component={DMPage}/>
          <Route path="/chat/1234"          component={DMChatPage}/>
          <Route path="/test"              component={TestPage}/>
          <Route path="/pokemon-go"        component={PokemonGoPage}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
