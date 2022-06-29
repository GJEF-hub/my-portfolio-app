import React from "react";
import { Link } from "react-router-dom";
import "./PortfolioApp.css";

const PortApp = () => {
  return (
    <section className="blog-prj-wrapper">
      <div className="portapp-container">
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
                </div>
                <div className="myportfolio-desc">
                  <h2>
                    gjef portfolio features responsive design layouts using
                    flexbox and grids with a functional user experience.
                  </h2>
                  <p>
                    {" "}
                    It presents a calm and eye-friendly theme that allows for
                    relaxable visual experience. <br /> I selected 'Roboto'
                    typeface that favors distinct layout variations and
                    contrasts. The project was concluded with adding an
                    experience layer of ultra-fine animations and page
                    transitions.
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
                      <a
                        href="https://blog.gjefspecials.co.uk"
                        target={"_blank"}
                        rel="noopener noreferrer"
                      >
                        <button
                          className="verify-btn"
                          style={{ backgroundColor: "#fff" }}
                        >
                          <i className="fa fa-paper-plane"></i> View Site
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </section>

        <section className="more-content">
          <div className="prj-flex">
            <div className="slider-item-lft">
              <h1>An inspiring portfolio app for beginners</h1>
              <img
                src={require("../images/my-app-sample.PNG")}
                alt=""
                style={{ width: "100%" }}
              />
            </div>

            <div className="slider-item-rit">
              <p>
                <i className="fa-solid fa-crosshairs"></i>
                <strong>The Objective</strong>
              </p>
              <p>
                As a web developer, I needed a central masterpiece to showcase
                my work and project to potential clients and employers. Also, I
                needed it as a point of reference for anyone or group that wants
                to see my portfolio. Not to mention that the main goal was to
                translate my work into a digital experience that would express
                my skillset and present my work in a memorable and contemporary
                way.
              </p>
              <p>
                Aside from sharing my skillset and work, I wanted to present it
                as a template that can be used by other aspiring or beginner
                developers to inspire them.
              </p>
              <p>
                <i className="fa-regular fa-lightbulb"></i>
                <strong>The Solution</strong>
              </p>
              <p>
                While learning React, I created this as my first project.
                Becoming a React.js developer introduced me to the programming
                framework journey. So I initiated this project; from drafting
                the plan, designs, to execution. This project took me about 4
                months to complete as I was learning all the techniques and
                rudiments of React. My mission was to give visitors or users a
                rich experience through my work.
              </p>
              <p>
                The overall app feels classy and well-tailored to users’
                expectations.
              </p>
            </div>
          </div>
        </section>

        <section className="about-app-flex">
          <div className="tech-spec-des">
            <h2>Technical Description</h2>
            <p>
              GJEF portfolio App is built with React js. The portfolio app
              features responsive design layouts using flexbox and grids with a
              functional user experience. This is help content adapt to all
              devices.
            </p>
            <p>
              The project was concluded with adding an experience layer of
              ultra-fine animations and page transitions. From page transitions,
              and image transitions to text transitions. Also, some of the
              clickable elements including interactive buttons are driven by
              JavaScript and CSS3. No plugin was involved as I wanted to get
              through all the intricacies of programming with React js.
            </p>
            <p>
              Secondly, the app is currently served using Netlify. Netlify
              offers hosting and serverless backend services for web
              applications and static websites. And, I am using the free hosting
              plan to deliver this app to the public.
            </p>
            <h3
              style={{
                color: "#000",
                fontWeight: "600",
                marginTop: "40px",
                marginBottom: "20px",
              }}
            >
              A balance between usability and fancy looks.
            </h3>
            <p>
              It is not just fanciful but with a good usability experience and
              navigation ease. Each descriptive layer is often accompanied with
              gif images.
            </p>
            <p>
              In addition, it presents a calm and eye-friendly theme that allows
              for relaxable visual experience. I selected 'Roboto' typeface that
              favors distinct layout variations and contrasts.
            </p>
            <p>
              I particularly express my taste for simplistic design and
              functionality when it comes to website or web apps.
            </p>
          </div>

          <div className="right-picture">
            <img src={require("../images/port-item.gif")} alt="" />
          </div>
        </section>

        <description className="bottom-item">
          <section className="concept">
            <h2 style={{ color: "#000", fontWeight: "600", marginTop: "50px" }}>
              The Concept{" "}
            </h2>
            <p>
              The plan was to build an app with maximum interaction ganished
              with a creative but simple designs. Considering mobile usage,
              optimizing a touch experience through the site was my major drive
              in terms of interactivity.
            </p>

            <p>
              The experience doesn't stop at the faceplate of your desktop
              screen. I elegantly revamp the desktop version of the site into a
              minimalist mobile experience.
            </p>
            <img src={require("../images/gj-portfolio-app.PNG")} alt="" />

            <Link to="/">
              <button className="app-btn">Visit App</button>
            </Link>
          </section>
        </description>
      </div>
    </section>
  );
};

export default PortApp;
