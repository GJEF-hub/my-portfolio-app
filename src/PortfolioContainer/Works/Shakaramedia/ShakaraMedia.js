import React from "react";
// import { Link } from "react-router-dom";
import "./ShakaraMedia.css";

const ShakaraMedia = () => {
  return (
    <section className="shakara-wrapper">
      <div className="shakara-container">
        {/* top section */}
        <section className="myportfolio-content">
          <section className="myportfolio-item">
            <div className="myport-theme">
              <h1>
                Shakara
                <br />
                ::media
              </h1>
              <span>Award Winning Event Host</span>
              <p>Navigating Autism | LOL | MC Shakara</p>
            </div>
            <div className="myportfolio-desc">
              <h2>
                Shakaramedia is anchored by Gladys Otono Atsenokhai, best known
                as MC SHAKARA. She is an award-winning events host and
                comedienne extraordinaire.
              </h2>

              <div className="bottom-desc">
                {" "}
                <ul className="exp-label-items">
                  <li>
                    <strong>Client:</strong> <br /> MC Shakara
                  </li>
                  <li>
                    <strong>Designed by:</strong> <br /> Godfrey Jeremiah
                  </li>
                  <li>
                    <strong>Tech:</strong> <br /> WordPress
                  </li>
                </ul>
                <div className="prj-nav">
                  <a
                    href="http://shakaramedia.com"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <button
                      className="verify-btn"
                      style={{ backgroundColor: "#fff" }}
                    >
                      <i className="fa fa-paper-plane"></i> Visit Site
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* beginning of main section */}
        <main>
          <section className="shakara-content">
            <div className="left-item">
              <h1>
                Peculiar <br />
                Event Host Portfolio
              </h1>
              <h5>
                <i
                  className="fa-solid fa-crosshairs"
                  style={{ marginLeft: "-20px" }}
                ></i>{" "}
                Objective
              </h5>
              <p>
                One of the main objectives of the new site was to attract new
                clients and leave a remarkable impression on the audience.
              </p>
              <p>
                Secondly, the objective was to present MC Shakara blog and event
                history inorder to connect with her audience and share her
                passion for making people laugh and delivering an excellent
                event hosting.
              </p>
            </div>
            <div className="right-item">
              <img
                src={require("../images/Shakaramedia-ds.gif")}
                alt="shakaramedia"
                className="sha-mob"
              />
            </div>
          </section>
        </main>

        {/* middle content */}
        <section className="content-sh">
          <div className="sh-items">
            <span>
              <img
                src="http://www.shakaramedia.com/wp-content/uploads/2020/07/Gladys-Otono-Atsenokhai-1.jpeg"
                alt="laugh out loud event"
              />
            </span>
          </div>
          <div className="push-right">
            <h5 style={{ margin: "40px" }}>
              <i
                className="fa-regular fa-lightbulb"
                style={{ marginLeft: "-20px" }}
              ></i>{" "}
              Solution
              <p>
                The website features a custom built content management system
                (WordPress) for quick content updates. This allows MC Shakara to
                easily update her content and share her blog posts.
              </p>
              <p>
                The simplistic but creative design echos Shakaramedia's brand
                value through well placed event gallery and functional site
                navigation.
              </p>
            </h5>
          </div>
        </section>

        <main>
          <section className="content-md">
            <div className="conent-items">
              <span>
                <img
                  src="http://www.shakaramedia.com/wp-content/uploads/2020/07/ShakaraM-18-1.jpg"
                  alt="laugh out loud event"
                />
              </span>
              <span>
                <img
                  src="http://www.shakaramedia.com/wp-content/uploads/2020/07/ShakaraM-16-4.jpg"
                  alt="laugh out loud event"
                />
              </span>
              <span>
                <img
                  src="http://www.shakaramedia.com/wp-content/uploads/2020/08/LOL-MCShakara.jpg"
                  alt="laugh out loud event"
                />
              </span>
              <h4>
                <strong>Gladys Otono Atsenokhai</strong>, best known as{" "}
                <strong>MC SHAKARA</strong> is an award-winning event host and a
                trained broadcast journalist with experience in Television News
                production and presentation. Her professionalism comes through
                in her delivery. MC Shakara is also an experienced content
                writer and brand strategist.
              </h4>
              <div>
                <img src={require("../images/lol.gif")} alt="" />
              </div>
            </div>
          </section>
        </main>

        <section className="sh-box">
          <section className="sh-flex">
            <div>
              <h2>Navigating Autism</h2>
              <p>
                Helping families with special needs children and their
                caregivers understand and navigate autism using simple
                strategies and my experience as a parent to a child within the
                Autism spectrum.
              </p>
            </div>
            <div>
              <h2>MC Shakara</h2>
              <p>
                Gladys Otono Atsenokhai best known as MC SHAKARA is an award
                winning events host and comedienne extraordinare. Her amiable
                character, quirky humour and ability…
              </p>
            </div>
            <div>
              <h2>Laugh Out Loud</h2>
              <p>
                An evening of comedy to promote positive mental well being
                through entertainment.
              </p>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default ShakaraMedia;
