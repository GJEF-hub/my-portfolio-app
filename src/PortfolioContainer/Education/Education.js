import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="edu-parent">
      <header>
        <h1 className="section-header">Education</h1>
        <p>
          Godfrey has unwavering passion for learning new ways of thinking and
          developing relevant techniques. He has, over the years, stayed
          committed to self-improvement, capacity building, and
          self-development.
        </p>
      </header>

      <section className="edu-menu">
        <div>
          <h2>Most Recent Education</h2>
          <h4>
            IT Certifications <span> (2019 - 2021) </span> <hr />
          </h4>
          <ul className="edu-list">
            <li>
              <img
                src="https://i.imgur.com/Nj5pPbp.png"
                alt="Microsoft Azure Cloud Fundamentals"
              />
            </li>
            <li>
              <h5>Microsoft Azure Cloud Fundamentals</h5>
              <p className="certs-bio">
                Godfrey demonstrated foundational level knowledge of cloud
                services and how those services are provided with Microsoft
                Azure.
              </p>
            </li>

            <li className="cert-verification">
              <a
                href="https://www.credly.com/badges/5a956735-0bb0-4f3e-8858-3f2831bf11c7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verification link
              </a>
            </li>
          </ul>
          <ul className="edu-list">
            <li>
              <img
                src="https://i.imgur.com/Lewbrag.png"
                alt="Windows Server Administration Fundamentals "
              />
            </li>
            <li>
              <h5>Windows Server Administration Fundamentals</h5>
              <p className="certs-bio">
                Godfrey demonstrated knowledge of fundamental server
                administration concepts. He earned this badge after performing
                excellently in a supervised test.
              </p>
            </li>

            <li className="cert-verification">
              <a
                href="https://www.credly.com/badges/8c3bacda-9842-4295-80ab-446b7c181719"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verification link
              </a>
            </li>
          </ul>

          <ul className="edu-list">
            <li>
              <img
                src="https://i.imgur.com/eFqAl5K.png"
                alt="CompTIA Secure Infrastructure Specialist"
              />
            </li>
            <li>
              <h5>CompTIA Secure Infrastructure Specialist</h5>
              <p className="certs-bio">
                Godfrey has the knowledge and skill required to support hardware
                and software systems. He is able to protect an organization’s
                assets from internal and external threats.
              </p>
              <p>
                {" "}
                <strong>Criteria:</strong> He has earned{" "}
                <a
                  href="https://www.credly.com/badges/2fc6d18d-b09b-41e0-a4d4-c58ce9ab3e86"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CompTIA A+
                </a>
                ,{" "}
                <a
                  href="https://www.credly.com/badges/bd36d293-1e88-4f37-852f-4229697d3453"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CompTIA N+
                </a>{" "}
                , and{" "}
                <a
                  href="https://www.credly.com/badges/12547424-bc35-40c4-8f0f-893cb9303886"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CompTIA S+
                </a>
                .
              </p>
            </li>

            <li className="cert-verification">
              <a
                href="https://www.credly.com/badges/a861f436-39ea-4052-822c-0f2bec8ffa6d"
                target="_blank"
                rel="noopener noreferrer"
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
              <p className="certs-bio">
                Godfrey has the ability to manage the flow of a workplace and
                optimize day-to-day activities. He has demonstrated the ability
                to analyze business operations and identify customer needs.
              </p>
              <p>
                {" "}
                <strong>Criteria:</strong> He has earned{" "}
                <a
                  href="https://www.credly.com/badges/2fc6d18d-b09b-41e0-a4d4-c58ce9ab3e86"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CompTIA A+
                </a>{" "}
                and{" "}
                <a
                  href="https://www.credly.com/badges/bd36d293-1e88-4f37-852f-4229697d3453"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CompTIA N+.
                </a>{" "}
              </p>
            </li>

            <li className="cert-verification">
              <a
                href="https://www.credly.com/badges/82a201d8-7018-42b1-aa16-1aabc57e399c"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verification link
              </a>
            </li>
          </ul>

          <ul className="edu-list">
            <li>
              <img
                src="https://i.imgur.com/NXSL8Mv.png"
                alt="CompTIA Cloud Essentials "
              />
            </li>
            <li>
              <h5>CompTIA Cloud Essentials</h5>
              <p className="certs-bio">
                Godfrey has an understanding of the business value of cloud
                computing, cloud types, steps to a successful adoption of the
                cloud, and the impact and changes on IT service management,
                including risks and consequences. He understands cloud computing
                and the work it takes to move to and govern the cloud.
              </p>
            </li>

            <li className="cert-verification">
              <a
                href="https://www.credly.com/badges/e3f3a691-b18e-43fa-ada2-aac7b14f36d8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verification link
              </a>
            </li>
          </ul>
          <h4 className="acad-qual">
            Academic Qualifications <span> (2005 - 2010) </span>
          </h4>
          <hr />
          <ul className="edu-list">
            <li>
              <img
                src="https://i.imgur.com/RVSIwId.png"
                alt="Bachelos Degree in Physics"
              />
            </li>
            <li>
              <h5>
                Bachelors Degree (Hons) - B.Sc. Physics <br />
                <a
                  href="https://oauife.edu.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span> Obafemi Awolowo University, Nigeria</span>
                </a>
              </h5>

              <p className="certs-bio">
                {" "}
                <strong>Criteria:</strong> Godfrey completed the approved course
                of study and fulfilled all the prescribed conditions through a
                period of four years in the institution.{" "}
              </p>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}

export default Education;
