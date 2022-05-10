import React from "react";
import "../Home/Home.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Navigation from "../Navigation/Navigation";
import Summary from "../Summary/Summary";
import Resume from "../Resume/Resume";
import Career from "../Career/Career";
import Careers from "../Careers/Careers";
import Works from "../Works/Works";
import ShowMore from "../ShowMore/Showmore";
import Contact from "../ContactMe/Contact";
import Error from "../Error/Error";
import Footer from "../Footer/Footer";
 

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
          <Summary />
          <Resume />
        </Route>
        <Route path="/summary">
          <Summary />
        </Route>
        <Route path="/career">
          <Careers />
          <Career />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
        <Route path="/showmore">
          <ShowMore />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default ReactRouterSetup;
