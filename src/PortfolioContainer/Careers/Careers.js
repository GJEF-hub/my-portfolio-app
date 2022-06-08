import React, { useState } from "react";

import "./Careers.css";
import { Link } from "react-router-dom";
import Blogger from "./Blogger";

function Careers() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <section className="parent-container" id="careers">
      <div className="careers-wrapper">
        <header>
          {/* <h1 className="section-header">Career</h1> */}
          <div className="career-picture">
            <div className="career-bg-picture"></div>
          </div>
        </header>

        {/* <Link to="/blogger"> */}
        <a href="#blogdsplay">
          {" "}
          <button onClick={handleClick} className="blogger-link but">
            <i className="fa fa-paper-plane"></i> Blogger
          </button>
        </a>

        {/* </Link> */}
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
          I am a process-oriented and solution-driven professional with over 6
          years of working experience in creating interactive and user-centered
          designs; with a creative eye for design and details.
        </p>
        <Link to="/about-me">
          <button className="verify-btn">Read More</button>
        </Link>
        <section>
          <div className="blogds" id="blogdsplay">
            {isShown && <Blogger />}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Careers;
