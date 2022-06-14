import React from "react";

function Freelance() {
  return (
    <section className="myportfolio-wrapper-fr">
      <div className="myportfolio-container-fr">
        <section className="myportfolio-content">
          <section className="myportfolio-item">
            <div className="myport-theme2">
              <h1>
                GJEF <br /> Freelance <br /> Site
                <p>IT Outsourcing Enterprise</p>
              </h1>

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
                    <strong>Developed by:</strong> <br /> Godfrey Jeremiah
                  </li>
                  <li>
                    <strong>Tech:</strong> <br /> React js
                  </li>
                  <li>
                    <i className="fa fa-paper-plane"></i>
                    <strong> VIEW PROJECT</strong>
                  </li>
                </ul>
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
