import React from "react";
import "./ShowMore.css";
import { motion } from "framer-motion";

const showMoreVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 3,
      when: "beforeChildren",
    }
  }
}

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
    }
  }
}

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
          <h2>Explore my works...</h2>
        </div>
        <motion.div className="show-more-container" variants={entryAnimation}>
          <motion.div
            className="show-more-items proj-1"
            variants={showMoreVariants}
          >
            #1 Project 1
          </motion.div>
          <motion.div
            className="show-more-items proj-2"
            variants={showMoreVariants}
          >
            #2 Project 2
          </motion.div>
          <motion.div
            className="show-more-items proj-3"
            variants={showMoreVariants}
          >
            #3 Project 3
          </motion.div>
          <motion.div
            className="show-more-items proj-4"
            variants={showMoreVariants}
          >
            #4 Project 4
          </motion.div>
          <motion.div
            className="show-more-items proj-5"
            variants={showMoreVariants}
          >
            #5 Project 5
          </motion.div>
          <motion.div
            className="show-more-items proj-6"
            variants={showMoreVariants}
          >
            #6 Project 6
          </motion.div>
          <motion.div
            className="show-more-items proj-7"
            variants={showMoreVariants}
          >
            #7 Project 7
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
        <motion.button
          className="load-more"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 15px rgb(189, 119, 177)",
            
          }}
        >
          <div className="go-back-btn" onClick="loadMore()">
            GO BACK
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
}
