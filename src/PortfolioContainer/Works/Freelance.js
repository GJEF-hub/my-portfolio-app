import React from "react";
import { Link } from "react-router-dom";

function Freelance() {
  return (
    <section className="myportfolio-wrapper-fr">
      <div className="myportfolio-container-fr">
        <section className="myportfolio-content">
          <section className="myportfolio-item">
            <div className="myport-theme2">
              <h1>
                GJEF <br /> Freelance
                <p>IT Outsourcing Enterprise</p>
              </h1>

              <img src={require("./images/port-item.gif")} alt="" />
            </div>
            <div className="myportfolio-desc">
              <h2>
                gjef freelance website is still an on-going project. Currently,
                the website provides backlinks to the blog site to enhance
                search engine appearance.
              </h2>
              <img src={require("./images/freelance-tab.png")} alt="" />
              <p>
                {" "}
                This website is built with Mobirise. Mobirise is a freeware web
                design application that allows users to design and publish
                bootstrap websites without coding. Mobirise is essentially a
                drag and drop website builder, featuring various website themes.
              </p>
              <div className="bottom-desc">
                <ul className="exp-label-items">
                  <li>
                    <strong>Developed by:</strong> <br /> Godfrey Jeremiah
                  </li>
                  <li>
                    <strong>Services:</strong> <br /> IT Solutions
                  </li>
                  <li>
                    <strong>Platform:</strong> <br /> Mobirise
                  </li>
                </ul>
                <div className="prj-nav">
                  <Link to="/freelance-project">
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

export default Freelance;
