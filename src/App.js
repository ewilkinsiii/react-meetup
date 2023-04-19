import React from "react";
import { Route, Switch } from "react-router-dom";

import AllMeetupsPages from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavoritesPages from "./pages/Favorites";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPages />
        </Route>

        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>

        <Route path="/favorites">
          <FavoritesPages />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
