import React from "react";
// react router
import { BrowserRouter as Routing, Route, Switch } from "react-router-dom";
import { NavBar } from "../components";
import { Home } from "../pages";

function Router() {
  return (
    <Routing>
      <NavBar />
      <div id="content-pages">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Routing>
  );
}

export default Router;
