import React from "react";
import "./Showmore.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const showMoreVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 3,
      when: "beforeChildren",
    },
  },
};

const entryAnimation = {
  hidden: { x: -250 },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 3,
      when: "beforeChildren",
      stiffness: 300,
    },
  },
};

export default function ShowMore() {
  return (
    <section className="show-more-wrapper">
      <motion.div
        className="show-more-parent"
        id="show-more"
        variants={showMoreVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container-heading">
          <h3>Explore my works...</h3>
        </div>
        <motion.div className="show-more-container" variants={entryAnimation}>
          <section>
            <motion.div
              className="show-more-items proj-1"
              variants={showMoreVariants}
            >
              <h4> #1 Freelance Site </h4>
              <p>
                This website was created using Mobirise. This freelance site
                provide remote services globally.
              </p>
              <a
                href="http://www.gjefspecials.co.uk"
                target="_blank"
                rel="noreferrer"
              >
                <button className="view-btn">View Site</button>
              </a>
            </motion.div>
          </section>

          {/* Another section of each project  */}
          <motion.div
            className="show-more-items proj-2"
            variants={showMoreVariants}
          >
            <h4> #2 Shakaramedia </h4>
            <p>
              Shakaramedia advocate for people especially children with autism.
              Also help people deal with depression.
            </p>
            <a
              href="http://www.shakaramedia.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button>View Site</button>
            </a>
          </motion.div>

          <motion.div
            className="show-more-items proj-3"
            variants={showMoreVariants}
          >
            <h4> #3 Portfolio App </h4>
            <p>
              This portfolio app was built with React JS to showcases my profile,
              works, achievements, and abilities; for pitching purpose.
            </p>
            <a
              href="https://radiant-puppy-a8ee72.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button>View Site</button>
            </a>
          </motion.div>
          <motion.div
            className="show-more-items proj-4"
            variants={showMoreVariants}
          >
            <iframe
              src="https://www.youtube.com/embed/G680njUplL0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              height="185"
              width="290"
            ></iframe>
          </motion.div>
          <motion.div
            className="show-more-items proj-5"
            variants={showMoreVariants}
          >
            <iframe
              src="https://www.youtube.com/embed/TkjPytcClqE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              height="185"
              width="290"
            ></iframe>
          </motion.div>
          <motion.div
            className="show-more-items proj-6"
            variants={showMoreVariants}
          >
            <iframe
              src="https://www.youtube.com/embed/G680njUplL0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              height="185"
              width="290"
            ></iframe>
          </motion.div>
          <motion.div
            className="show-more-items proj-7"
            variants={showMoreVariants}
          >
            <iframe
              src="https://www.youtube.com/embed/OO86VCRFRO0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              height="185"
              width="290"
              
            ></iframe>
          </motion.div>
          <motion.div
            className="show-more-items proj-8"
            variants={showMoreVariants}
          >
            #8 Project 8
          </motion.div>
          <motion.div
            className="show-more-items proj-9"
            variants={showMoreVariants}
          >
            #9 Project 9
          </motion.div>
          {/* <div className="show-more-items proj-10">Project 11</div>
          <div className="show-more-items proj-11">Project 12</div>
          <div className="show-more-items proj-12">Project 13</div> */}
        </motion.div>
        <Link to="/works">
          <button className="loadmore-btn">GO BACK</button>
        </Link>
      </motion.div>
    </section>
  );
}
