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
import WorldOfWarcraftPage from './components/aaPageComponents/WorldOfWarcraftPage';
import TradePage from './components/aaPageComponents/tradePage';
import TestPage from './components/testComponent/testComponent';
import DMPage from './components/aaPageComponents/dmPage';
import CreateListingForm from './components/formComponents/createListingForm';
import DemoAnimation from './components/aaPageComponents/demoAnimation';
import OfferDetailsMTGOPage from './components/aaPageComponents/offerDetailsPageMTGO';
import TestComponent from './components/testComponent/testComponent';
import FeedBackForm from './components/formComponents/feedbackForm';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/Pokemon/:tradeID" component={TradePage} />
          <Route
            path="/MagicTheGathering/:tradeID"
            component={OfferDetailsMTGOPage}
          />
          <Route path="/profile" component={MyProfile} />
          <Route path="/create-poke-trade" component={CreateListingForm} />
          <Route path="/messages" component={DMPage} />
          <Route path="/test" component={TestPage} />
          <Route path="/Pokemon Go" component={PokemonGoPage} />
          <Route path="/MTGO" component={MagicTheGatheringPage} />
          <Route path="/WoW" component={WorldOfWarcraftPage} />
          <Route path="/feedback" component={FeedBackForm} />
          <Route path="/demo-animation" component={DemoAnimation} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
