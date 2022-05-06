import React from "react";
import "./Works.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Works() {
  return (
    <section className="works-container">
      <div className="works-parent" id="works">
        <div className="works-content">
          <div className="works-title">
            <h1>Works</h1>
          </div>

          <div className="works-subheading">
            <span>Explore some of my works...</span>
          </div>

          <div className="samples">
            <div className="samples-card">
              <h2>Websites & Designs </h2>
              <div className="grid">
                <figure className="effect-blog">
                  <a
                    href="https://blog.gjefspecials.co.uk/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require("../../assets/images/mockup.png")}
                      alt="GJEF Blog Site by Godfrey J."
                      className="card-img"
                    />
                  </a>
                  <figcaption>
                    <h2>
                      My <span> Blog</span>
                    </h2>
                    <p className="icon-links">
                      <span> Engaging Posts </span>
                      <span>|| Since 2018 </span>
                    </p>
                    <p className="description">
                      Developed on <em>WordPress</em>. <br /> <br />I research,
                      write, review, edit, proofread, design, and publish
                      content... <br />
                      <br /> <strong>Skills Involved: </strong>{" "}
                      WordPress/Plugins Installation & Configuration, HTML, CSS,
                      JS, PHP/MySQL, CMS Mgt, Photoshop, Video/Audio Editing,
                      SEO, and Publishing.
                    </p>
                  </figcaption>
                </figure>
              </div>

              <div className="more-works">
                <Link to="/showmore">
                  <motion.button
                    className="load-more"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 0px 15px rgb(189, 119, 177)",
                    }}
                  >
                    LOAD MORE
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
