import React from "react";
import "./Certs.css";

const Certs = () => {
  return (
    <section className="edu-parent">
      <div className="edu-menu">
        <div>
          <ul className="edu-list">
            <li>
              <img
                src="https://i.imgur.com/eFqAl5K.png"
                alt="CompTIA Secure Infrastructure Specialist"
              />
            </li>
            <li>
              <h5>CompTIA Secure Infrastructure Specialist</h5>
              <p>
                Godfrey have the knowledge and skill required to support
                hardware and software systems. He is able to protect an
                organization’s assets from internal and external threats.
              </p>
              <p>
                {" "}
                <strong>Criteria:</strong> He has earned <a
                  href="https://www.credly.com/badges/2fc6d18d-b09b-41e0-a4d4-c58ce9ab3e86"
                  target="_blank"
                  rel="noreferrer"
                >
                  CompTIA A+
                </a>, <a
                  href="https://www.credly.com/badges/bd36d293-1e88-4f37-852f-4229697d3453"
                  target="_blank"
                  rel="noreferrer"
                >
                  CompTIA N+
                </a>{" "},
                and {" "}<a
                  href="https://www.credly.com/badges/12547424-bc35-40c4-8f0f-893cb9303886"
                  target="_blank"
                  rel="noreferrer"
                >CompTIA S+</a>.
              </p>
            </li>

            <li>
              <a
                href="https://www.credly.com/badges/a861f436-39ea-4052-822c-0f2bec8ffa6d"
                target="_blank"
                rel="noreferrer"
              >
                Verification link
              </a>
            </li>
          </ul>
          <ul className="edu-list">
            <li>
              <img
                src="https://i.imgur.com/pftBwFU.png"
                alt="CompTIA IT Operations Specialist"
              />
            </li>
            <li>
              <h5>CompTIA IT Operations Specialist </h5>
              <p>
                Godfrey have the ability to manage the flow of a workplace and
                optimize day-to-day activities. He has demonstrated the ability
                to analyze business operations and identify customer needs.
              </p>
              <p>
                {" "}
                <strong>Criteria:</strong> He has earned{" "}
                <a
                  href="https://www.credly.com/badges/2fc6d18d-b09b-41e0-a4d4-c58ce9ab3e86"
                  target="_blank"
                  rel="noreferrer"
                >
                  CompTIA A+
                </a>{" "}
                and{" "}
                <a
                  href="https://www.credly.com/badges/bd36d293-1e88-4f37-852f-4229697d3453"
                  target="_blank"
                  rel="noreferrer"
                >
                  CompTIA N+.
                </a>{" "}
              </p>
            </li>

            <li>
              <a
                href="https://www.credly.com/badges/82a201d8-7018-42b1-aa16-1aabc57e399c"
                target="_blank"
                rel="noreferrer"
              >
                Verification link
              </a>
            </li>
          </ul>
          <div className="certs-sample-bg">
            {" "}
            <div className="certs-sample"></div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certs;
