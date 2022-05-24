import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
// import { Link, animateScroll as scroll } from "react-scroll";

export default function Navigation() {

  return (
    <div className="navigation-container">
      {/* ---------- Side scroll indicator -------- */}

      <section className="navigation-parent">
        <ul className="navigation">
          <li>
            <span className="side-indicator"> Click Me &#8594; </span>
          </li>
          <Link to="/">
            {" "}
            <li className="navigation-lists" title="Home"></li>{" "}
          </Link>

          <Link to="/#resume">
            <li className="navigation-lists" title="Skillset"></li>
          </Link>

          <Link to="/#careers">
            <li className="navigation-lists" title="Career history"></li>
          </Link>

          {/* <Link to="/#works">
            {" "}
            <li className="navigation-lists" title="works"></li>
          </Link>

          <Link to="/education">
            {" "}
            <li className="navigation-lists" title="education"></li>
          </Link> */}

          <Link to="/#contact">
            {" "}
            <li className="navigation-lists" title="Contact"></li>
          </Link>
          <li>
            <span className="side-indicator"> &#8592; To Scroll </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
