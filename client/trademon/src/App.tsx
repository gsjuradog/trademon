import React from 'react';
import './App.scss';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import Login from './components/aaPageComponents/loginPage';
import LandingPage from './components/aaPageComponents/landingPage';
import MyProfile from './components/aaPageComponents/myProfilePage';
import PokemonGoPage from './components/aaPageComponents/pokemonGoPage';
import MagicTheGatheringPage from './components/aaPageComponents/MagicTheGatheringPage';
import OfferDetailsPage from './components/aaPageComponents/offerDetailsPage';
import TestPage from './components/testComponent/testComponent';
import DMPage from './components/aaPageComponents/dmPage';
import DMChatPage from './components/aaPageComponents/dmChatPage';
import CreateListingForm from './components/formComponents/createListingForm';
import DemoAnimation from './components/aaPageComponents/demoAnimation';

import TestComponent from './components/testComponent/testComponent'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/trade/:tradeID" component={OfferDetailsPage} />
          <Route path="/profile" component={MyProfile} />
          <Route path="/create-listing" component={CreateListingForm} />
          <Route path="/messages" component={DMPage} />
          <Route path="/chat/1234" component={DMChatPage} />
          <Route path="/test" component={TestPage} />
          <Route path="/pokemon-go" component={PokemonGoPage} />
          <Route
            path="/magic-the-gathering"
            component={MagicTheGatheringPage}
          />
          <Route path="/demo-animation" component={DemoAnimation} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
