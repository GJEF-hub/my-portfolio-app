import React from "react";
import "./Summary.css";
import { motion } from "framer-motion";

export default function Details() {
  return (
    <>
      <section className="details-container" id="details">
        <div className="details-parent">
          {/* Picture section */}
          <div className="details-picture">
            <div className="details-picture-background"></div>
          </div>

          <div className="details-title">
            <div className="details-content">
              <h1>Summary</h1> <hr />
              <p>
                Godfrey is a process-oriented and solution-driven professional
                with over 6 years of working experience in creating interactive
                and user-centered designs; with a creative eye for design and
                details.
              </p>
              <p>
                He equally has a rich technical background, providing support in
                a Window-based domain, and holds a BSc degree in Physics and
                relevant IT certifications in CompTIA and Microsoft. <br />{" "}
                <br />
                Some of his specialties for over 8 years included technical
                support, networking, hardware repairs, IT security,
                configuration, and troubleshooting across a wide array of
                Microsoft products.{" "}
              </p>
              <motion.button className="verify-btn"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 15px rgb(148, 115, 7)"
                }}>
                <a
                  href="#career"
                >
                  View Career History
                </a>
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
