import React from "react";
import "./Home.css";
import "../../assets/buttons/buttons.css";
import Profile from "../Profile/Profile";
import Resume from "../Resume/Resume";
import Contact from "../ContactMe/Contact";
import Careers from "../Careers/Careers";
import Testimonials from "../Testimonial/Testimonials";
import Showcasing from "../Works/Showcasing";
import Works from "../Works/Works";

export default function Home() {
  return (
    <div className="home-container">
      <Profile />
      <Works />
      <Testimonials />
      <Contact />
    </div>
  );
}
