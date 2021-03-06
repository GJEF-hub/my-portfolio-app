import React from "react";
import "./Works.css";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// const showMoreVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       type: "spring",
//       mass: 0.2,
//       damping: 15,
//       when: "beforeChildren",
//     },
//   },
// };

// const entryAnimation = {
//   hidden: { y: 5000 },
//   visible: {
//     y: 0,
//     transition: {
//       type: "spring",
//       mass: 0.3,
//       damping: 12,
//       when: "beforeChildren",
//       stiffness: 100,
//     },
//   },
// };

export default function Works() {
  return (
    <section className="works-wrapper">
      {/* <video loop autoPlay>
        <source src="https://i.imgur.com/S5HDWaT.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="overlay"></div>
      <div className="works-container">
        <section className="work-intro-dsp">
          <img
            src={require("../../assets/images/mockup.png")}
            alt="GJEF Blog Site by Godfrey"
          />
          <div className="exp-label-box">
            <h1>
              Godfrey <br />
              Jeremiah <br />
              Blog
              <p>Beyond Imagination</p>
            </h1>

            <h4>
              GJEF Specials is an inspiring blog space with engaging content -
              {
                " investigating how humans have evolved with religion, science, and technology."
              }{" "}
            </h4>
            <hr />
            <ul className="exp-label-items">
              <li>
                <strong>Client</strong> <br /> Personal Blog
              </li>
              <li>
                <strong>Services</strong> <br /> Content Creation <br />
                Web Showcase <br /> Visual Podcast
              </li>

              <li>
                <div className="prj-nav">
                  <Link to="/godfreyJeremiahBlog">
                    <button
                      className="verify-btn"
                      style={{ backgroundColor: "#fff" }}
                    >
                      <i className="fa fa-paper-plane"></i> FULL PROJECT
                    </button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="oda-prjs">
          <div className="oda-exp-container">
            <h1>Other Projects</h1>
            <div className="oda-exp hover-ef">
              <ul className="oda-exp-items">
                <li>
                  <h3>My Portfolio App</h3>
                </li>
                <li>
                  <p>Showcasing my portfolio</p>
                </li>
                <li>
                  <i className="fa fa-paper-plane"></i>{" "}
                  <strong>
                    <Link to="/my-portfolio">View Project </Link>
                  </strong>
                </li>
                <img
                  src={require("../../assets/images/portfolio-app.PNG")}
                  alt="Godfrey Jeremiah Portfolio App"
                />
              </ul>
            </div>

            <div className="oda-exp hover-ef">
              <ul className="oda-exp-items">
                <li>
                  <h3>Shakaramedia</h3>
                </li>
                <li>
                  <p>Events Host </p>
                </li>
                <li>
                  <i className="fa fa-paper-plane"></i>{" "}
                  <strong>
                    {" "}
                    <Link to="/shakaramedia">View Project</Link>
                  </strong>
                </li>
                <img
                  src={require("../../assets/images/Shakaramedia.PNG")}
                  alt="Shakaramedia website project"
                />
              </ul>
            </div>

            <div className="oda-exp hover-ef">
              <ul className="oda-exp-items">
                <li>
                  <h3>Freelance</h3>
                </li>
                <li>
                  <p>Tech Project Outsourcing</p>
                </li>
                <li>
                  <i className="fa fa-paper-plane"></i>{" "}
                  <strong>
                    {" "}
                    <Link to="/freelance">View Project</Link>
                  </strong>
                </li>
                <img
                  src={require("../../assets/images/freelance website.PNG")}
                  alt="GJEF freelance website project"
                />
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
