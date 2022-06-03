import React from "react";
import "../Home/Home.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Navigation from "../Navigation/Navigation";
import Summary from "../Summary/Summary";
import Resume from "../Resume/Resume";
import Careers from "../Careers/Careers";
import Works from "../Works/Works";
import ShowMore from "../ShowMore/Showmore";
import Contact from "../ContactMe/Contact";
import Error from "../Error/Error";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
import Testimonials from "../Testimonial/Testimonials";
import Blogger from "../Careers/Blogger";
import Showcasing from "../Works/Showcasing";

const ReactRouterSetup = () => {
  return (
    <section className="parent-container">
      <Router>
        <Navbar />
        <Navigation />
        <Switch>
          <Route exact path="/" name="Home Page">
            <Home />
          </Route>
          <Route path="/summary">
            <Summary />
            <Resume />
            <Contact />
          </Route>
          <Route path="/about-me">
            <Careers />
            <Resume />
            <Education />
            {/* <Summary /> */}
            {/* <Contact /> */}
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/careers">
            <Careers />
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
          <Route path="/testimonials">
            <Testimonials />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/showcasing">
            <Showcasing />
          </Route>
          <Route path="/blogger">
            <Blogger />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </section>
  );
};

export default ReactRouterSetup;
