import React from "react";
// import { Link } from "react-router-dom";
import "./History.css";

const Blogger = () => {
  return (
    <section className="blogger-wrapper" id="blogger">
      <div className="blogger-container">
        <div className="page-title">
          <h1>Creative Blogger</h1>
          <p>
            <em>Since February 2018</em> | Award Winning Blogger
          </p>
          <br />
        </div>

        <section className="media-text">
          <img
            src={require("../../assets/images/gjSp2.gif")}
            alt="gjef"
            className="header-video"
          />
          {/* <video className="header-video" loop autoPlay>
            <source
              src="https://i.imgur.com/S5HDWaT.mp4"
              alt=""
              type="video/mp4"
            />
          </video> */}
        </section>

        <section className="content-description">
          <h3>Experience</h3>
          <ul className="content-items">
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>Employ
              user experience (UX) and conversion rate optimization methods to
              turn visitors into active users.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>Develop
              and integrate content marketing strategies and link building.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Research, write, edit, proofread, and publish engaging articles
              weekly; sharing ideas and valuable insights.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Continually check search terms, rankings, and analytics to monitor
              the performance of websites and make recommendations for
              improvement.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Create content including designs, motion graphics, videos, landing
              pages, audio podcast, and other visual elements.
            </li>
          </ul>
          <div className="action-text">
            <p>
              <i className="fa fa-paper-plane"></i>{" "}
              <a
                className="action-mail"
                href="mailto:godfreyjeremiah2015@gmail.com"
              >
                godfreyjeremiah2015@gmail.com
              </a>
              <br />
              <em>Available for freelance work</em>
            </p>
          </div>
        </section>
        <hr />
      </div>
    </section>
  );
};

export default Blogger;
