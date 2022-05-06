import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation-container">
      <section className="navigation-menu">
        <span
          className="toggle-menu-btn"
          // href="#"
          // onClick="remove_hash_from_url()"
        >
          Menu
          <img
            src={require("../../assets/images/menu.png")}
            alt="Menu toggle"
          />
        </span>

        <ul className="toggle-navigation">
          <Link to="/">
            
            <li className="toggle-lists">Profile</li>
          </Link>

          <Link to="/summary">
            <li className="toggle-lists">Summary</li>
          </Link>

          <Link to="/resume">
            <li className="toggle-lists">SkillSet</li>
          </Link>

          <Link to="/works">
            
            <li className="toggle-lists">Works</li>
          </Link>

          <Link to="/contact">
            
            <li className="toggle-lists">Contact</li>
          </Link>

          <span>
            
            <li className="toggle-lists">
              <img
                src={require("../../assets/images/close.png")}
                alt="Menu toggle"
                className="close-menu"
              />
            </li>
          </span>
        </ul>
      </section>

      {/* ---------- Side scroll indicator -------- */}

      <section className="navigation-parent">
        <ul className="navigation">
          <li>
            <span className="side-indicator"> Click Me &#8594; </span>
          </li>
          <Link to="/">
            {" "}
            <li className="navigation-lists" title="profile"></li>{" "}
          </Link>

          <Link to="/summary">
            <li className="navigation-lists" title="summary"></li>
          </Link>

          <Link to="/resume">
            <li className="navigation-lists" title="skillset"></li>
          </Link>

          <Link to="/works">
            {" "}
            <li className="navigation-lists" title="works"></li>
          </Link>

          <Link to="/career">
            {" "}
            <li className="navigation-lists" title="career history"></li>
          </Link>

          <Link to="/contact">
            {" "}
            <li className="navigation-lists" title="contact"></li>
          </Link>
        </ul>
      </section>
    </div>
  );
}
