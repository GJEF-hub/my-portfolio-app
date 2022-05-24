import React from "react";
import "./Works.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Works() {
  return (
    <section className="works-container">
      <div className="works-parent" id="works">
        <div className="works-content">
          <header>
            <h1 className="section-header">All Works</h1>
          </header>

          <div className="samples">
            <div className="samples-card">
              {/* <h2>Websites & Designs </h2> */}
              <div className="grid">
                <div className="effect-blog">
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

                  <div className="works-description">
                    <h2>GJEF Specials Blog</h2>

                    <p className="icon-links">
                      <span> Engaging & Enlightening Posts </span>
                      <span>| Since 2018 </span>
                    </p>
                    <p className="icon-links">Developed on WordPress</p>
                    <p className="icon-links"><a
                    href="https://blog.gjefspecials.co.uk/"
                    target="_blank"
                    rel="noreferrer"
                  >-WEBSITE LIVE VIEW-</a></p>
                    <hr />

                    <p className="description">
                      I research, write, review, edit, proofread, design, and
                      publish content... <br />
                      <strong>Skills Involved:</strong> <br />
                      WordPress/Plugins Installation & Configuration, HTML, CSS,
                      JS, PHP/MySQL, CMS Mgt, Photoshop, Video/Audio Editing,
                      SEO, Creative Design, and Publishing.
                    </p>
                    <Link to="/showmore">
                      <button className="loadmore-btn">SHOW MORE</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
