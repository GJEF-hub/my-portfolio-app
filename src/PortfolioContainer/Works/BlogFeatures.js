import React from "react";
import "./Works.css";

import HorizontalScroll from "react-scroll-horizontal";
import firstPic from "./images/1.jpg";
import secondPic from "./images/2.jpg";
import thirdPic from "./images/3.jpg";
import fourthPic from "./images/4.jpg";
import fiftPic from "./images/5.jpg";
import sixtPic from "./images/6.jpg";
import seventhPic from "./images/7.jpg";
import eightPic from "./images/8.jpg";
import ninthPic from "./images/gj-portfolio-app.PNG";

function BlogFeatures() {
  const child = { width: `100em`, height: `100%` };

  return (
    <main>
      <HorizontalScroll
        pageLock={true}
        reverseScroll={true}
        config={{ stiffness: 100, damping: 11 }}
        animValues={2}
      >
        <div style={child} className="slider-item hor-img-bg1">
          <img src={firstPic} alt="" className="img" />
          {/* <h3>Place Title here...</h3> */}
        </div>
        <div style={child} className="slider-item">
          <img src={thirdPic} alt="" className="img" />
          {/* <h3>Place Title here...</h3> */}
        </div>
        <div style={child} className="slider-item">
          <img src={fourthPic} alt="" className="img" />
          {/* <h3>Place Title here...</h3> */}
        </div>
        <div style={child} className="slider-item">
          <img src={fiftPic} alt="" className="img" />
          {/* <h3>Place Title here...</h3> */}
        </div>
        <div style={child} className="slider-item">
          <img src={sixtPic} alt="" className="img" />
          {/* <h3>Place Title here...</h3> */}
        </div>
        <div style={child} className="slider-item">
          <img src={seventhPic} alt="" className="img" />
          {/* <h3>Place Title here...</h3> */}
        </div>
        <div style={child} className="slider-item">
          <img src={secondPic} alt="" className="img" />
          {/* <h3>Place Title here...</h3> */}
        </div>
        <div style={child} className="slider-item">
          <img src={eightPic} alt="" className="img" />
          {/* <h3>Place Title here...</h3> */}
        </div>
        <div style={child} className="slider-item">
          <img src={ninthPic} alt="" className="img" />
          {/* <h3>Place Title here...</h3> */}
        </div>
      </HorizontalScroll>
    </main>
  );
}

export default BlogFeatures;
