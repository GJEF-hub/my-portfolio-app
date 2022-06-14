import React from "react";

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
              <img src={require("./images/Shakaramedia-ds.gif")} alt="" />
            </div>
            <div className="myportfolio-desc">
              <img src={require("./images/LOL-sh.gif")} alt="" />
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
                    <strong>Designed by:</strong> <br /> Godfrey Jeremiah
                  </li>
                  <li>
                    <strong>Tech:</strong> <br /> WordPress
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

export default Shakaramedia;
