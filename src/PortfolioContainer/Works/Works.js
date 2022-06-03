import React from "react";
import "./Works.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const showMoreVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.2,
      damping: 15,
      when: "beforeChildren",
    },
  },
};

const entryAnimation = {
  hidden: { y: 5000 },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      mass: 0.3,
      damping: 12,
      when: "beforeChildren",
      stiffness: 100,
    },
  },
};

export default function Works() {
  return (
    <section className="works-wrapper">
      <video loop autoPlay>
        <source src="https://i.imgur.com/S5HDWaT.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="works-container">
        <section className="work-intro-dsp">
          <img
            src={require("../../assets/images/mockup.png")}
            alt="GJEF Blog Site by Godfrey"
          />
          <div className="exp-label-box">
            <h1>
              GJEF <br />
              Specials
            </h1>
            <span>
              {" "}
              <a
                href="https://blog.gjefspecials.co.uk"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-paper-plane"></i> View Blog
              </a>
            </span>
            <h4>
              GJEF Specials is an inspiring blog space with engaging content -
              {
                " investigating how humans have evolved with religion, science, and technology."
              }{" "}
            </h4>
            <hr />
            <ul className="exp-label-items">
              <li>
                <strong>Client</strong> <br /> Personal Blog
              </li>
              <li>
                <strong>Services</strong> <br /> Content Creation <br />
                Web Showcase <br /> Visual Podcast
              </li>
              <li>
                <strong>Industries</strong> <br /> Blogging
              </li>
              <li>
                <strong>Date</strong> <br /> Feb 2018
              </li>
            </ul>
          </div>
        </section>

        <section className="display-container ds-wrapper">
          <div className="featured-portfolio">
            <img
              src="https://blog.gjefspecials.co.uk/wp-content/uploads/2021/04/starting-a-blog-600x430.jpg"
              alt="blog post display"
            />
            <h5>Blogging: How to begin</h5>
            <p>
              Starting a blog is one thing and managing the blog is another
              crucial aspect. This is going to be interesting and insightful for
              anyone who wishes to start or run a blog....
            </p>
          </div>
          <div className="featured-portfolio">
            <img
              src="https://blog.gjefspecials.co.uk/wp-content/uploads/2021/04/starting-a-blog-600x430.jpg"
              alt="blog post display"
            />
            <h5>Blogging: How to begin</h5>
            <p>
              Starting a blog is one thing and managing the blog is another
              crucial aspect. This is going to be interesting and insightful for
              anyone who wishes to start or run a blog....
            </p>
          </div>
          <div className="featured-portfolio">
            <img
              src="https://blog.gjefspecials.co.uk/wp-content/uploads/2021/07/security_cover-600x430.jpg"
              alt="blog post display"
            />
            <h5>Talk on Cybersecurity</h5>
            <p>
              Starting a blog is one thing and managing the blog is another
              crucial aspect. This is going to be interesting and insightful for
              anyone who wishes to start or run a blog....
            </p>
          </div>
        </section>
        <section className="oda-prjs">
          <div className="oda-exp-container">
            <h1>Other Projects</h1>
            <div className="oda-exp hover-ef">
              <ul className="oda-exp-items">
                <li>
                  <h3>My Portfolio App</h3>
                </li>
                <li>
                  <p>Showcasing my portfolio</p>
                </li>
                <li>
                  <i className="fa fa-paper-plane"></i>{" "}
                  <strong>View Project</strong>
                </li>
                <img
                  src={require("../../assets/images/portfolio-app.PNG")}
                  alt="Godfrey Jeremiah Portfolio App"
                />
              </ul>
            </div>

            <div className="oda-exp hover-ef">
              <ul className="oda-exp-items">
                <li>
                  <h3>Shakaramedia</h3>
                </li>
                <li>
                  <p>Events Host </p>
                </li>
                <li>
                  <i className="fa fa-paper-plane"></i>{" "}
                  <strong>View Project</strong>
                </li>
                <img
                  src={require("../../assets/images/Shakaramedia.PNG")}
                  alt="Shakaramedia website project"
                />
              </ul>
            </div>

            <div className="oda-exp hover-ef">
              <ul className="oda-exp-items">
                <li>
                  <h3>Freelance</h3>
                </li>
                <li>
                  <p>Tech Project Outsourcing</p>
                </li>
                <li>
                  <i className="fa fa-paper-plane"></i>{" "}
                  <strong>View Project</strong>
                </li>
                <img
                  src={require("../../assets/images/freelance website.PNG")}
                  alt="GJEF freelance website project"
                />
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
