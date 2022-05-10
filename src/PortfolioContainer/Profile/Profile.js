import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const btnVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 15px rgb(39, 113, 252)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

export default function Profile() {
  return (
    <>
      {/* <div className="awards-honors-container">
      <div className="awards-honors">
        <img
          src={require("../../../assets/images/awwwards.png")}
          alt="Awards and Honors tag" />
      </div>
    </div> */}

      <section className="profile-container" id="profile">
        <div className="profile-parent">
          <motion.div
            className="profile-details"
            initial={{ x: -650 }}
            animate={{ x: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 150 }}
          >
            <div className="colz">
              <div className="colz-icon">
                <a href="https://www.linkedin.com/in/godfrey-jeremiah-2020/">
                  <i className="fa fa-linkedin-square"></i>
                </a>
                <a href="https://www.facebook.com/gjefspecials.co.uk">
                  <i className="fa fa-facebook-square"></i>
                </a>

                <a href="https://twitter.com/gjefspecials">
                  <i className="fa fa-twitter"></i>
                </a>

                <a href="https://www.youtube.com/channel/UCJxHtKCJtAShTRjlgsB5hUQ">
                  <i className="fa fa-youtube-square"></i>
                </a>

                <a href="https://www.instagram.com/gjefspecials.co.uk/?hl=en">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span>
                
                Hello, my name is
                <span className="highlighted-text"> Godfrey</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                <h2>
                <Typical
                    loop={Infinity}
                    steps={[
                      "Process-oriented",
                      2000,
                      "UX/UI Designer",
                      2000,
                      "React.js Developer",
                      2000,
                      "IT Sys Engineer",
                      2000,
                      
                    ]}
                    wrapper="h2"
                  />
                </h2>
                <span className="profile-role-tagline">
                  Keen on building front-end applications
                </span>
              </span>
            </div>
            <div className="profile-options">
              <Link to="/summary">
                <motion.button
                  className="btn primary-btn"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 15px hsl(46, 97%, 39%)",
                  }}
                >
                   Profile Summary
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="btn highlighted-btn"
                  variants={btnVariants}
                  whileHover="hover"
                >
                  Let's Chat
                </motion.button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="profile-picture"
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <div className="profile-picture-background"></div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
