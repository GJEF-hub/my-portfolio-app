import React from "react";

export const Certss = () => {
  return (
    <section className="edu-parent">
      <div className="edu-menu">
        <div>
          <ul className="edu-list">
            <li>
              <img
                src="https://i.imgur.com/NXSL8Mv.png"
                alt="CompTIA Cloud Essentials "
              />
            </li>
            <li>
              <h5>CompTIA Cloud Essentials</h5>
              <p>
                Godfrey has an understanding of the business value of cloud
                computing, cloud types, steps to a successful adoption of the
                cloud, and the impact and changes on IT service management,
                including risks and consequences. He understands cloud computing
                and the work it takes to move to and govern the cloud.
              </p>
            </li>

            <li>
              <a
                href="https://www.credly.com/badges/e3f3a691-b18e-43fa-ada2-aac7b14f36d8"
                target="_blank"
                rel="noreferrer"
              >
                Verification link
              </a>
            </li>
          </ul>
          <h4>
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
              <h5>Bachelors Degree (Honours) - B.Sc. Physics </h5>
              <p>
                <strong>Institution:</strong> Obafemi Awolowo University <br />
                <strong>Location:</strong> Ile-Ife, Osun State, Nigeria
              </p>
              <p>
                {" "}
                <strong>Criteria:</strong> Godfrey completed the approved course
                of study and fulfilled all the prescribed conditions through a
                period of four years in the institution.{" "}
              </p>
            </li>

            <li>
              <a href="https://oauife.edu.ng/" target="_blank" rel="noreferrer">
                Institution Link
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="interesting-facts">
        {" "}
        <button>Interesting Facts About Godfrey</button>{" "}
      </div>
    </section>
  );
};
