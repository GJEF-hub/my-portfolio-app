import React from "react";
import { Link } from "react-router-dom";
import "./PortfolioApp.css";

const PortApp = () => {
  return (
    <section className="myapp-wrapper">
      <section className="app-cont">
        {/* first block content */}
        <main className="main-box">
          <section className="first-flex">
            <div>
              <h1 className="app-label">
                My Portfolio App
                <p>
                  Award Winning Creative Design <br />
                  Rich User Experience <br /> &#169;2022
                </p>
              </h1>
            </div>
            <div>
              <h2>
                My Portfolio features responsive design layouts using flexbox
                and grids with a functional user experience.
              </h2>
              <p>
                It presents a calm and eye-friendly theme that allows for
                relaxable visual experience. I selected 'Roboto' typeface that
                favors distinct layout variations and contrasts. The project was
                concluded with adding an experience layer of ultra-fine
                animations and page transitions.
              </p>
              <ul className="inside-flex">
                <li>
                  <strong>Developed by:</strong> <br />
                  Godfrey Jeremiah
                </li>
                <li>
                  <strong>Category:</strong> <br />
                  Portfolio App
                </li>
                <li>
                  <strong>Tech:</strong> <br />
                  React js
                </li>
                <Link to="/">
                  <button
                    style={{
                      padding: "3px 8px",
                      borderRadius: "10px",
                      height: "27px",
                      border: "1px solid #4da7f1",
                    }}
                  >
                    PREVIEW
                  </button>
                </Link>
              </ul>
            </div>
          </section>
        </main>

        {/* second block content */}

        <main className="main-box">
          <section className="second-flex">
            <div>
              <img
                src={require("../images/my-app.PNG")}
                alt=""
                className="fst"
              />
            </div>
            <div>
              <img
                src={require("../images/my-app-sample.PNG")}
                alt=""
                className="scnd"
              />
            </div>
          </section>
        </main>

        {/* third block content */}
        <main className="main-box">
          <section
            className="third-flex"
            style={{ textAlign: "center", padding: "25% auto" }}
          >
            {/* <div  */}
            <h1>
              Stylish
              <br /> One Page
              <br /> Solution
            </h1>

            {/* </div> */}
          </section>
        </main>

        <main className="main-box">
          <section className="third-flex">
            <div className="app-obj">
              <p>
                <i className="fa-solid fa-crosshairs"></i>
                <strong>The Objective</strong>
              </p>
              <p>
                I tasked myself to create a stylish portfolio app that would be
                less fancy, simple but creative with a unique visual appeal.
              </p>
              <p>
                Though, it was my first app to build with React as part of my
                learning process but it's a project I'd wanted to executed.
              </p>
              <p>
                The plan was to build an app with maximum interaction ganished
                with a creative but simple designs. With mobile experience in
                mind, optimizing touch interactivity with functional navigation
                style through the site was my major drive.
              </p>
            </div>
            <div className="thrd-flex">
              <span>
                <img src={require("../images/blogger.jpg")} alt="" />
              </span>
              <span className="soln">
                <p className="solution">
                  <i className="fa-regular fa-lightbulb"></i>
                  <strong>The Solution</strong>
                </p>
                <p>
                  Using flex and grids for some layouts help the overall site to
                  be responsive with a fluid-like feel. And, for interactivity,
                  loads of pure CSS3 and little of JavaScript played a huge
                  role.
                </p>
                <p>
                  The overall website feels classy and well-tailored to users'
                  expectations.
                </p>
                <p>
                  The experience doesn't stop at the faceplate of your desktop
                  screen. I elegantly revamp the desktop version of the site
                  into a minimalist mobile experience.{" "}
                </p>
                <p>
                  Best experience is targeted at device with a minimum of 375px
                  width size - iphone X, for instance.
                </p>
              </span>
            </div>
          </section>
        </main>

        {/* fourth block content */}

        <main className="main-box">
          <section className="fourth-flex">
            <div>
              <h3>Interactivity driven by animation</h3>
              <p>
                The project was concluded with adding an experience layer of
                ultra-fine animations and page transitions. From page
                transitions, and image transitions to text transitions.
              </p>
              <p>
                The responsive design layouts using flexbox and grids with a
                functional user experience - help the content adapt to all
                devices.
              </p>
            </div>
            <div>
              <img
                src={require("../images/port-item.gif")}
                alt=""
                className="anim-app"
              />
            </div>
          </section>
        </main>
      </section>
    </section>
  );
};

export default PortApp;
