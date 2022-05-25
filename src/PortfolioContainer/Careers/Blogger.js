import React from "react";
import { Link } from "react-router-dom";
import Careers from "./Careers";

const Blogger = () => {
  return (
    <section className="blogger-wrapper" id="blogger">
      <section>
        {" "}
        <Careers />{" "}
      </section>
      <div className="blogger-container">
        <div className="page-title">
          <header>
            <h1>Blogger</h1>
            <p>
              PERSONAL BLOG <span>Since 2018</span>
            </p>
          </header>
        </div>
        <section className="media-text">
          <iframe
            loop
            autoPlay
            mute
            width="100%"
            height="380"
            src="https://www.youtube.com/embed/G680njUplL0"
            title="YouTube video player"
            frameborder="0"
            allow="loop; autoplay; picture-in-picture"
            allowfullscreen
          ></iframe>
          <video loop autoPlay muted>
            <source
              src="https://www.youtube.com/G680njUplL0"
              type="video/mp4"
            />
          </video>
        </section>
      </div>
    </section>
  );
};

export default Blogger;
