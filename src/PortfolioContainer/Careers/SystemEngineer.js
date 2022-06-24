import React from "react";

const SystemEngineer = () => {
  return (
    <section className="blogger-wrapper" id="engineer">
      <div className="blogger-container">
        <div className="page-title">
          <h1>IT System Engineer</h1>
          <p>Networking | IT Support | Cloud | Hardware</p>
          <p>
            <i class="fa-solid fa-network-wired"></i> Over 6 years of{" "}
            <strong>working experience</strong>
          </p>
        </div>

        <section className="media-text">
          <img
            src={require("./images/engineer.jpg")}
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
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Resolved help desk tickets, managed escalations from team members,
              and supported over 1,000 end-users with connectivity expertise in
              a Windows {"&"} Linux environment that led to 99% reliability on
              the company’s services.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Created an automated system using PowerShell scripts and other
              technologies that helped implement system patches, tightened
              network and systems security, thereby reducing implementation
              cycle, and gained 4-hours weekly.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i> Wrote
              user requirements into technical specifications and maintained
              consistent documentation of IT operations that helped to train new
              employees.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Initiated, recommended, and implemented data backup and recovery
              solutions with clients to prevent data loss.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Planned, implemented, managed, and maintained a Windows
              domain-based and network infrastructure to provide vast and robust
              technical services.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Identified and resolved several malware programs in end-users
              devices, prevented cyber attacks such as ransomware, and enforced
              security best practices by educating users, investigating and
              improving configurations issues.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i> Built
              over 100 robust systems on-demand, tailored to clients’ specific
              requirements.
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i> Led a
              cross-functional team to plan, install, configure, test, and
              implement IT infrastructures including Cisco switches, servers,
              racks, networks, access points, Windows OS, Linux, PCs, VPN,
              Cables, and COMDs at banks, colleges, and data centers.
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default SystemEngineer;
