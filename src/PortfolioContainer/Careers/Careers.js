import React, { useState } from "react";

import "./Careers.css";
import { Link } from "react-router-dom";
import Blogger from "./Blogger";
import ItTutor from "./ItTutor";
import SystemEngineer from "./SystemEngineer";
import Designer from "./Designer";

function Careers() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <section className="parent-container" id="careers">
      <div className="careers-wrapper">
        <div className="action-text">
          <p>
            <i className="fa fa-paper-plane"></i>{" "}
            <a
              className="action-mail"
              href="mailto:godfreyjeremiah2015@gmail.com"
            >
              godfreyjeremiah2015@gmail.com
            </a>
            <br />
            <em>Available for freelance work</em>
          </p>
        </div>
        {/* <h1 className="section-header">Career</h1> */}
        <div className="career-picture">
          <div className="career-bg-picture"></div>
        </div>

        <a href="#blogdsplay">
          {" "}
          <button onClick={handleClick} className="blogger-link but">
            <i className="fa fa-paper-plane"></i> Blogger
          </button>
        </a>

        <a href="#engineer">
          <button onClick={handleClick} className="engineer-link but">
            <i className="fa fa-paper-plane"></i> IT Sys Engineer
          </button>
        </a>
        <a href="#designer">
          <button onClick={handleClick} className="designer-link but">
            <i className="fa fa-paper-plane"></i> Cr8ve Designer
          </button>
        </a>

        {/* Link to IT Tutor comp */}
        <a href="#tutor">
          <button onClick={handleClick} className="tutor-link but">
            <i className="fa fa-paper-plane"></i> IT Tutor
          </button>
        </a>
        <p className="description">
          A process-oriented and solution-driven professional with over 6 years
          of working experience in creating interactive and user-centered
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
        <section>
          <div className="blogds" id="blogdsplay">
            {isShown && <ItTutor />}
          </div>
        </section>
        <section>
          <div className="blogds" id="blogdsplay">
            {isShown && <SystemEngineer />}
          </div>
        </section>
        <section>
          <div className="blogds" id="blogdsplay">
            {isShown && <Designer />}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Careers;
