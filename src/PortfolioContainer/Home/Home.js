import React from "react";
import "./Home.css";
import "../../assets/buttons/buttons.css";
import Profile from "../Profile/Profile";
import Contact from "../ContactMe/Contact";
import Testimonials from "../Testimonial/Testimonials";
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
