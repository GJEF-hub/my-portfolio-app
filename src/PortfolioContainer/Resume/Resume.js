import React from "react";
import "./Resume.css";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <section className="skillset-container" id="resume">
      <div className="skillset-parent">
        <h1 className="section-header">Skill Set</h1>
        <div className="skillset-content">
          <ul className="primary-list">
            <li>
              <h6>HTML/CSS/Sass/JS</h6>
              <div className="list-bar">
                <div className="skills html">90%</div>
              </div>
            </li>

            <li>
              <h6>Figma</h6>
              <div className="list-bar">
                <div className="skills figma">70%</div>
              </div>
            </li>

            <li>
              <h6>Photoshop/Illustrator</h6>
              <div className="list-bar">
                <div className="skills photoshop">90%</div>
              </div>
            </li>

            <li>
              <h6>WordPress</h6>
              <div className="list-bar">
                <div className="skills wordpress">95%</div>
              </div>
            </li>

            <li>
              <h6>React JS/React Native</h6>
              <div className="list-bar">
                <div className="skills react">75%</div>
              </div>
            </li>

            <li>
              <h6>Bootstrap/Git</h6>
              <div className="list-bar">
                <div className="skills bootstrap">65%</div>
              </div>
            </li>
            <li>
              <h6>Redux/REST API</h6>
              <div className="list-bar">
                <div className="skills redux">60%</div>
              </div>
            </li>
          </ul>

          <ul className="secondary-list">
            <li>
              <h6>Technical Support</h6>
              <div className="list-bar">
                <div className="skills tech">90%</div>
              </div>
            </li>

            <li>
              <h6>Windows</h6>
              <div className="list-bar">
                <div className="skills win">95%</div>
              </div>
            </li>
            <li>
              <h6>VMWare/Cloud</h6>
              <div className="list-bar">
                <div className="skills vmwc">70%</div>
              </div>
            </li>
            <li>
              <h6>Troubleshooting/Repairs</h6>
              <div className="list-bar">
                <div className="skills trbsr">95%</div>
              </div>
            </li>
            <li>
              <h6>Networking (TCP/IP)</h6>
              <div className="list-bar">
                <div className="skills net">75%</div>
              </div>
            </li>
            <li>
              <h6>MS Products</h6>
              <div className="list-bar">
                <div className="skills ms">80%</div>
              </div>
            </li>
            <li>
              <h6>Customer Service/Admin</h6>
              <div className="list-bar">
                <div className="skills csad">95%</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="next-link">
            <hr />
            <Link to="/works">
              <button className="btn classy-btn">See Works</button>
            </Link>
            <hr />
          </div>

      </div>
    </section>
  );
}
