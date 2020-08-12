import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Router>
      {/* switch between pages */}
      <Switch>
        {/* route to page */}
        <Route path="/users" exact>
          {/* component to render on routed page */}
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/users" />
      </Switch>
    </Router>
  );
};

export default App;
