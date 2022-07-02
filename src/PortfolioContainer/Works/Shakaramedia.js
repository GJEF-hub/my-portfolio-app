import React from "react";
import { Link } from "react-router-dom";

function Shakaramedia() {
  return (
    <section className="myportfolio-wrapper-sh">
      <div className="myportfolio-container">
        <section className="myportfolio-content">
          <section className="myportfolio-item">
            <div className="myport-theme">
              <h1>
                Shakara
                <br />
                ::media
              </h1>
              <span>Award Winning Event Host</span>
              <p>Navigating Autism | LOL | MC Shakara</p>
              <img
                src={require("./images/Shakaramedia-ds.gif")}
                alt="shakaramedia "
              />
            </div>
            <div className="myportfolio-desc">
              <img
                src={require("./images/lol.gif")}
                alt="laugh out loud event"
              />
              <h2>
                Shakaramedia is anchored by Gladys Otono Atsenokhai, best known
                as MC SHAKARA. She is an award-winning events host and
                comedienne extraordinaire.
              </h2>
              <p>
                The website features a custom built content management system
                (WordPress) for quick content updates. This allows MC Shakara to
                easily update her content and share her blog posts. The
                simplistic but creative design echos Shakaramedia's brand value
                through well placed event gallery and functional site
                navigation.
              </p>
              <div className="bottom-desc">
                {" "}
                <ul className="exp-label-items">
                  <li>
                    <strong>Client:</strong> <br /> MC Shakara
                  </li>
                  <li>
                    <strong>Designed by:</strong> <br /> Godfrey Jeremiah
                  </li>
                  <li>
                    <strong>Tech:</strong> <br /> WordPress
                  </li>
                </ul>
                <div className="prj-nav">
                  <Link to="/shakara-project">
                    <button
                      className="verify-btn"
                      style={{ backgroundColor: "#fff" }}
                    >
                      <i className="fa fa-paper-plane"></i> FULL PROJECT
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}

export default Shakaramedia;
