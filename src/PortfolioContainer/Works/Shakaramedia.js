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
                {" "}
                It presents a calm and eye-friendly theme that allows for
                relaxable visual experience. <br /> I selected 'Roboto' typeface
                that favors distinct layout variations and contrasts. The
                project was concluded with adding an experience layer of
                ultra-fine animations and page transitions.
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
                  <Link to="/blog-project">
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
          <section>
            <div></div>
          </section>

          <div></div>
        </section>
      </div>
    </section>
  );
}

export default Shakaramedia;
