import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./Pages/AllMettups";
import NewMeetupPage from "./Pages/NewMeetup";
import FavouritesPage from "./Pages/Favourites";
// import MainNavigation from "./Components/Layout/MainNavigation";
import Layout from "./Components/Layout/Layout";
//layout as we want to give a specific layout to app.js so using it as wrapper around app.js
function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
