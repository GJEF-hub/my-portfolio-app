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
                gjef portfolio features responsive design layouts using flexbox
                and grids with a functional user experience.
              </h2>
              <img src={require("./images/my-app-sample.PNG")} alt="" />
              <p>
                {" "}
                It presents a calm and eye-friendly theme that allows for
                relaxable visual experience. I selected 'Roboto' typeface that
                favors distinct layout variations and contrasts. The project was
                concluded with adding an experience layer of ultra-fine
                animations and page transitions.
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
                    <strong>Tech:</strong> <br /> React js
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
