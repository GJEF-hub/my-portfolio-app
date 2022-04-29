import React from "react";
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";
import PageSeparator from "./PageSeparator/PageSeparator";
import Footer from "./Footer/Footer";
import "./Home.css";
import "../../assets/buttons/buttons.css";
import Summary from "../AboutMe/Summary/Summary";
import Resume from "../Resume/Resume";
import Works from "../Resume/Works/Works";
import ShowMore from "../Resume/ShowMore/ShowMore";
import Contact from '../ContactMe/Contact';


export default function Home() {
  return (
    <div className="home-container">
      
      <Navigation />
      <Profile />
      <Footer />
      <Summary />
      <Resume />
      {/* <PageSeparator /> */}
      <Works />
      <ShowMore />
      
      <Contact />
      
    </div>
  );
}

