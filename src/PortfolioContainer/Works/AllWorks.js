import React, { useState } from "react";
import "./Works.css";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AllWorks() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <section className="works-wrapper">
      {/* <video loop autoPlay>
        <source src="https://i.imgur.com/S5HDWaT.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="overlay"></div>
      <div
        className="cursor"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div>
      <div className="works-container">
        <section className="work-intro-dsp">
          <img
            src={require("../../assets/images/mockup.png")}
            alt="GJEF Blog Site by Godfrey"
          />
          <div className="exp-label-box">
            <h1>
              GJEF <br />
              Specials
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
                <strong>Industries</strong> <br /> Blogging
              </li>
              <li>
                <strong>Date</strong> <br /> February 2018
              </li>
            </ul>
          </div>
        </section>
        <div className="prj-nav">
          <Link to="/blog-project">
            <button className="verify-btn" style={{ backgroundColor: "#fff" }}>
              <i className="fa fa-paper-plane"></i> FULL PROJECT
            </button>
          </Link>
        </div>
        <section>
          <div className="fea-im">
            <img src={require("./images/gjSp0.gif")} alt="" />

            <img src={require("./images/gjSp4.gif")} alt="" />
          </div>
        </section>
      </div>
    </section>
  );
}

export default AllWorks;
