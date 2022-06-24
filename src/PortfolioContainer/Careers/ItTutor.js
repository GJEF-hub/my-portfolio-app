import React from "react";

const ItTutor = () => {
  return (
    <section className="blogger-wrapper" id="tutor">
      <div className="blogger-container">
        <div className="page-title">
          <h1>Info Tech Tutor</h1>
          <p>Graphics | MS Office | Web Dev | Programming</p>
          <p>
            <i class="fa-solid fa-person-chalkboard"></i> 5 years of{" "}
            <strong>tutoring experience</strong>
          </p>
        </div>

        <section className="media-text">
          <img
            src={require("./images/it-tutor.jpg")}
            alt=""
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              objectPosition: "top",
              mixBlendMode: "luminosity",
            }}
          />
        </section>

        <section className="content-description">
          <h3>Experience</h3>
          <ul className="content-items">
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Presented course information and course schemes to prospective
              students and team members which helped in decision-making
              procedures.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Communicated course objectives and ensured that they are achieved
              within defined timeframe.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Coordinated, organized, and prepared resources required to help
              students master skills and content for each course.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Consistently introduced and authored content for marketing
              purposes.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Organized tests, evaluated, and assessed students at the end of
              each course to rate their knowledge gained during the classes.
            </li>
          </ul>
        </section>
        <hr />
      </div>
    </section>
  );
};

export default ItTutor;
