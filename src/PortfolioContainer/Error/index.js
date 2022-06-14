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

import Contact from "../ContactMe/Contact";
import Error from "../Error/Error";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
import Testimonials from "../Testimonial/Testimonials";
import Blogger from "../Careers/Blogger";
import Showcasing from "../Works/Showcasing";
import BlogFeatures from "../Works/BlogFeatures";
import AllWorks from "../Works/AllWorks";
import MyPortfolio from "../Works/MyPortfolio";
import Shakaramedia from "../Works/Shakaramedia";
import Freelance from "../Works/Freelance";
import GjefBlog from "../Works/GjefBlog/GjefBlog";
import ScrollToTop from "../ScrollToTop";

const ReactRouterSetup = () => {
  return (
    <section className="parent-container">
      <Router>
        <ScrollToTop>
          <Navbar />
          <Navigation />
          <Switch>
            <Route exact path="/" name="Home Page">
              <Home />
            </Route>
            <Route path="/summary">
              <Summary />
            </Route>
            <Route path="/my-portfolio">
              <MyPortfolio />
            </Route>
            <Route path="/all-works">
              <AllWorks />
              <MyPortfolio />
              <Shakaramedia />
              <Freelance />
            </Route>

            <Route path="/about-me">
              <Summary />
              <Resume />
              <Education />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/freelance">
              <Freelance />
            </Route>
            <Route path="/careers">
              <Careers />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/shakaramedia">
              <Shakaramedia />
            </Route>

            <Route exact path="/blog-project">
              <GjefBlog />
            </Route>

            <Route path="/works">
              <Works />
            </Route>
            <Route path="/features">
              <BlogFeatures />
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
        </ScrollToTop>
      </Router>
    </section>
  );
};

export default ReactRouterSetup;
