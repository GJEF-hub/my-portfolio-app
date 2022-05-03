import React from "react";
import "../Home/Home.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";
import Summary from "../Summary/Summary";
import Resume from "../Resume/Resume";
import Career from "../Career/Career";
import Works from "../Resume/Works/Works";
import ShowMore from "../ShowMore/Showmore";
import Contact from "../ContactMe/Contact";
import Error from "../Error/Error";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
          <Summary />
          <Works />
        </Route>
        <Route exact path="/summary">
          <Summary />
        </Route>
        <Route exact path="/career">
          <Career />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/works">
          <Works />
        </Route>
        <Route exact path="/showmore">
          <ShowMore />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
