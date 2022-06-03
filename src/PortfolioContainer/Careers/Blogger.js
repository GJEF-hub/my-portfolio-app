import React from "react";
import { Link } from "react-router-dom";
import "./History.css";

const Blogger = () => {
  return (
    <section className="blogger-wrapper" id="blogger">
      <div className="blogger-container">
        <div className="page-title">
          <h1>Creative Blogger</h1>
          <p>
            PERSONAL BLOG <em>Since 2018</em>
          </p>
          <p>
            {" "}
            <strong>Category:</strong> Philosophy {"&"} Tech
          </p>
        </div>

        <section className="media-text">
          <img src={require("../../assets/images/gjSp2.gif")} alt="gjef" />
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
        <section className="oda-exp-container">
          <h1>Other Experience</h1>
          <div className="oda-exp hover-ef">
            <ul className="oda-exp-items">
              <li>
                <h3>IT Sys Engineer</h3>
              </li>
              <li>
                <p>Solutions for IT infrastructures</p>
              </li>
              <li>
                <i className="fa fa-paper-plane"></i> <strong>View</strong>
              </li>
              <img
                src={require("../../assets/images/it engineer.jpg")}
                alt="It System Engineer"
              />
            </ul>
          </div>

          <div className="oda-exp hover-ef">
            <ul className="oda-exp-items">
              <li>
                <h3>IT Tutor</h3>
              </li>
              <li>
                <p>Solutions for IT infrastructures</p>
              </li>
              <li>
                <i className="fa fa-paper-plane"></i> <strong>View</strong>
              </li>
              <img
                src={require("../../assets/images/it tutor.jpg")}
                alt="IT Tutor instructing"
              />
            </ul>
          </div>

          <div className="oda-exp hover-ef">
            <ul className="oda-exp-items">
              <li>
                <h3>Creative Designer</h3>
              </li>
              <li>
                <p>Solutions for IT infrastructures</p>
              </li>
              <li>
                <i className="fa fa-paper-plane"></i> <strong>View</strong>
              </li>
              <img
                src={require("../../assets/images/blogger.jpg")}
                alt="Blogger at work"
              />
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Blogger;
