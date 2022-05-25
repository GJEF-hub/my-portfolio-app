import React from "react";
import "./Careers.css";
import { Link } from "react-router-dom";
// import Blogger from "./Blogger";

function Careers() {
  return (
    <section className="parent-container" id="careers">
      <div className="careers-wrapper">

        <header>
          <h1 className="section-header">Career</h1>
        </header>
          <div className="career-picture">
            <div className="career-bg-picture"></div>
          </div>

        <button className="blogger-link but">Blogger</button>
        <button className="engineer-link but">IT Sys Engineer</button>
        <button className="designer-link but">Cr8ve Designer</button>
        <button className="tutor-link but">IT Tutor</button>
        <p className="description">
          Godfrey is a process-oriented and solution-driven professional with
          over 6 years of working experience in creating interactive and
          user-centered designs; with a creative eye for design and details.
        </p>
        <Link to="/summary">
          <button className="verify-btn">Read More</button>
        </Link>
      
      </div>
    </section>
  );
}

export default Careers;
