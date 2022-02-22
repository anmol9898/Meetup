import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./Pages/AllMettups";
import NewMeetupPage from "./Pages/NewMeetup";
import FavouritesPage from "./Pages/Favourites";
import MainNavigation from "./Components/Layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
