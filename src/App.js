import React from "react";
import { Route, Switch } from "react-router-dom";

import AllMeetupsPages from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavoritesPages from "./pages/Favorites";

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
