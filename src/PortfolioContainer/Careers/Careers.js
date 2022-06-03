import React from "react";
import "./Careers.css";
import { Link } from "react-router-dom";
// import Blogger from "./Blogger";

function Careers() {
  return (
    <section className="parent-container" id="careers">
      <div className="careers-wrapper">
        <header>
          {/* <h1 className="section-header">Career</h1> */}
          <div className="career-picture">
            <div className="career-bg-picture"></div>
          </div>
        </header>

        <Link to="/blogger">
          <button className="blogger-link but">
            <i className="fa fa-paper-plane"></i> Blogger
          </button>
        </Link>
        <button className="engineer-link but">
          <i className="fa fa-paper-plane"></i> IT Sys Engineer
        </button>
        <button className="designer-link but">
          <i className="fa fa-paper-plane"></i> Cr8ve Designer
        </button>
        <button className="tutor-link but">
          <i className="fa fa-paper-plane"></i> IT Tutor
        </button>
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
