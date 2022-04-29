import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="navigation-container">
      <section className="navigation-menu">
        <span
          className="toggle-menu-btn"
          href="#"
          onClick="remove_hash_from_url()"
        >
          Menu
          <img
            src={require("../../../assets/images/menu.png")}
            alt="Menu toggle"
          />
        </span>

        <ul className="toggle-navigation">
          <a href="#profile">
            
            <li className="toggle-lists">Profile</li>
          </a>

          <a href="#details">
            <li className="toggle-lists">Summary</li>
          </a>

          <a href="#resume">
            <li className="toggle-lists">SkillSet</li>
          </a>

          <a href="#works">
            
            <li className="toggle-lists">Works</li>
          </a>

          <a href="#contact">
            
            <li className="toggle-lists">Contact</li>
          </a>

          <span href="#">
            
            <li className="toggle-lists">
              <img
                src={require("../../../assets/images/close.png")}
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
          <a href="#profile">
            {" "}
            <li className="navigation-lists" title="profile"></li>{" "}
          </a>

          <a href="#details">
            <li className="navigation-lists" title="summary"></li>
          </a>

          <a href="#resume">
            <li className="navigation-lists" title="skillset"></li>
          </a>

          <a href="#works">
            {" "}
            <li className="navigation-lists" title="works"></li>
          </a>

          <a href="#contact">
            {" "}
            <li className="navigation-lists" title="contact"></li>
          </a>
        </ul>
      </section>
    </div>
  );
}
