import React from "react";

const Designer = () => {
  return (
    <section className="blogger-wrapper" id="designer">
      <div className="blogger-container">
        <hr />
        <div className="page-title">
          <h1>Graphics Designer</h1>
          <p>UX/UI Design {"(Figma)"} | Adobe Photoshop | CorelDraw</p>
          <p>
            <i class="fa-solid fa-paintbrush"></i> Extensive years of{" "}
            <strong>working experience</strong>
          </p>
        </div>

        <section className="media-text">
          <img
            src={require("./images/outdoorbygjef.jpg")}
            alt=""
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              objectPosition: "center",
              mixBlendMode: "luminosity",
            }}
          />
        </section>

        <section className="content-description">
          <h3>Experience</h3>
          <ul className="content-items">
            <li>
              <i className="fa fa-check-circle" aria-hidden="true">
                {" "}
              </i>
              Developed creative advertising concepts and content for visual
              elements including website content, sales copy, consumer guides,
              social media posts, and automated email funnels.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Conducted usability tests and user experience research for mobile
              and web apps.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Designed and developed responsive and adaptive websites using
              HTML5, CSS3, and JavaScript.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Developed illustrations, logos, icons, and other designs in
              different file formats including SVG, GIF, PNG, and JPEG depending
              on requirements.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Prepared rough drafts, presented visual ideas and concepts,
              scheduled projects timeline, and inspired creative techniques with
              team members.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Created designs-to-print jobs including banners, user-guide,
              corporate identification kit, branding, all kinds of card, and
              other printable designs.
            </li>

            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i> Used SEO
              tools {"(Semrush, Google Analytics)"} to optimize web content
              through keyword research, UX research, link building, performance
              monitoring, and implementing recommendations.
            </li>
          </ul>
        </section>
        <a href="#careers">
          <span className="down-nav">
            <i class="fa-solid fa-circle-arrow-up"></i>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Designer;
