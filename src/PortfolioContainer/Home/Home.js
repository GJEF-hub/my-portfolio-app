import React from "react";
import "./Home.css";
import "../../assets/buttons/buttons.css";
import Profile from "../Profile/Profile";
import Resume from "../Resume/Resume";
import Contact from "../ContactMe/Contact";
import Careers from "../Careers/Careers";


export default function Home() {
  return (
    <div className="home-container">      
      <Profile />
      {/* <Divider /> */}
      <Resume />
      <Careers />
      <Contact />
    </div>
  );
};