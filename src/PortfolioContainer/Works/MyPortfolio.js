import React from "react";
import "./MyPortfolio.css";
import { Link } from "react-router-dom";

export default function MyPortfolio() {
  return (
    <section className="myportfolio-wrapper">
      <div className="myportfolio-container">
        <section className="myportfolio-content">
          <section className="myportfolio-item">
            <div className="myport-theme">
              <h1>
                My <br />
                Portfolio App
              </h1>
              <span>Award Winning Creative Design</span>
              <p>Unique | Rich UX</p>
              <img src={require("./images/port-item.gif")} alt="" />
            </div>
            <div className="myportfolio-desc">
              <img src={require("./images/my-app-sample.PNG")} alt="" />
              <h2>
                gjef portfolio features responsive design layouts using flexbox
                and grids with a functional user experience.
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
                    <strong>Client:</strong> <br /> Personal
                  </li>
                  <li>
                    <strong>Developed by:</strong> <br /> Godfrey Jeremiah
                  </li>
                  <li>
                    <strong>Tech:</strong> <br /> React js
                  </li>
                </ul>
                <div className="prj-nav">
                  <Link to="/portfolio-project">
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
