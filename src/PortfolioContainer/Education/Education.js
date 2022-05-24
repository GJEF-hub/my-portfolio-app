import React from "react";
import "./Education.css";
import Certs from "./Certs";
import { Certss } from "./Certss";
import Resume from "../Resume/Resume";

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
              <p>
                Godfrey have demonstrated foundational level knowledge of cloud
                services and how those services are provided with Microsoft
                Azure.
              </p>
            </li>

            <li>
              <a
                href="https://www.credly.com/badges/5a956735-0bb0-4f3e-8858-3f2831bf11c7"
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
                src="https://i.imgur.com/Lewbrag.png"
                alt="Windows Server Administration Fundamentals "
              />
            </li>
            <li>
              <h5>Windows Server Administration Fundamentals</h5>
              <p>
                Godfrey have demonstrated knowledge of fundamental server
                administration concepts.
              </p>
            </li>

            <li>
              <a
                href="https://www.credly.com/badges/8c3bacda-9842-4295-80ab-446b7c181719"
                target="_blank"
                rel="noreferrer"
              >
                Verification link
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <Certs />
      </section>
      <section>
        <Certss />
      </section>
      {/* <section> <Resume /> </section> */}
    </section>
  );
}

export default Education;
