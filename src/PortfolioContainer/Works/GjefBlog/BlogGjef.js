import React from "react";
import "./BlogGjef.css";
import { Link } from "react-router-dom";

export const BlogGjef = () => {
  return (
    <section className="overall-cont">
      {/* Start of Top section */}
      <main className="blog-gj-cont">
        <section className="top-flex">
          <div className="left-sd">
            <h1>
              Godfrey Jeremiah Blog
              <p>...beyond imagination</p>
            </h1>
            <h3>
              Godfrey Jeremiah Blog, also known as GJEF Specials, is an
              inspiring blog space with engaging content - investigating how
              humans have evolved with technology, science, and religion.
            </h3>
            <ul className="inside-flex">
              <li>
                <strong>Developed by:</strong> <br />
                Godfrey Jeremiah
              </li>
              <li>
                <strong>Category:</strong> <br />
                Creative Blog
              </li>
              <li>
                <strong>Date:</strong> <br />
                Feb 2018
              </li>
              <Link to="/webblog">
                <button
                  style={{
                    padding: "3px 8px",
                    borderRadius: "10px",
                    height: "27px",
                    border: "1px solid #4da7f1",
                  }}
                >
                  PREVIEW
                </button>
              </Link>
            </ul>
          </div>
          <div className="right-sd">
            <img
              src={require("../images/mob-gjef.png")}
              alt=""
              className="mobile-ver"
            />
          </div>
        </section>
      </main>

      {/* start of second block */}
      <section className="content-box-cont">
        <main className="blog-gj-cont">
          <section className="mid-cont">
            <img src={require("../images/nexus.png")} alt="" />
            <h1 style={{ color: "#000" }}>
              Highly captivating stories with a factitious tone.
            </h1>
          </section>
        </main>
      </section>

      {/* start of third block */}
      <section className="content-box-cont">
        <main className="blog-gj-cont">
          <section className="bio-flex">
            <div className="cont-bio">
              <p>
                <i className="fa-solid fa-crosshairs"></i>
                <strong>The Objective</strong>
              </p>
              <p>
                As a writer, I have always wanted to share the content that was
                traditionally on my journals and local drive. The main goal was
                to translate my content into a digital experience that would
                express my thoughts and present my work in a memorable and
                contemporary way.
              </p>
              <p>
                Aside sharing my thoughts and research content, I equally wanted
                to use the same platform to transfer my skills and career
                journey to others who need some guidance.
              </p>
              <img src={require("../images/tab-gjef.png")} alt="" />
            </div>
            <div className="cont-bio">
              <p className="solution">
                <i className="fa-regular fa-lightbulb"></i>
                <strong>The Solution</strong>
              </p>
              <p>
                I initiated a blog inspired by a creative concept that'd give
                visitors a rich experience through my work. The content is
                served on WordPress content management and laid on a
                customizable parallax theme. A few plugins were installed and
                constantly updated to enhance functionality.
              </p>
              <p>
                The overall website feels classy and well-tailored to users'
                expectations.
              </p>
              <img src={require("../images/mockup.png")} alt="" />
            </div>
          </section>
        </main>
      </section>

      {/* start of fourth block */}
      <section className="content-box-cont">
        <main className="blog-gj-cont bgrnd1">
          <section className="facts-box">
            <div>
              <h1>In search for facts?</h1>
              <h3>Going down the rabbit hole</h3>
              <p>
                I consider it crucial that we know the true story behind our
                evolution and how we have evolved as a people. The link to
                finding the fact encapsulated in this story seems broken. I will
                find it in every way that I can. This blog is a way for me to
                connect others to this journey.
              </p>
              <br />
              <h3>
                The blog takes you on a journey through time with insights on
                subjects that'd blow your mind.
              </h3>
              <p>
                I am committed to ensuring that every visitor to this blog gets
                that feeling by being consistent with the appearance of each
                post, the syncing of graphics with the background theme, and the
                pace of publishing my content.
              </p>
              <p>
                The titling, introduction, leading paragraphs, summaries, and
                excerpts are usually well mapped out before publishing.
              </p>

              <br />
            </div>
          </section>
        </main>
      </section>

      {/* start of fifth block */}

      <section className="content-box-cont">
        <main className="blog-gj-cont">
          <section className="bio-flex btm-cnt">
            <div>
              <img
                src={require("../images/content-gjef.png")}
                alt=""
                className="cont-mobv"
              />
              <h3>
                A combination of creativity and polished writing wrapped in a
                techy-nerd.
              </h3>
              <p>
                GJEF Blog is an expression of my curiosity to dig deep for
                hidden facts with a twist of creative approach. Alongside my
                passion for technology mixed with the historical settings of how
                the human society has evolved.
              </p>
            </div>
            <div>
              <h3>My passion for sci-tech is the motivation</h3>
              <p>
                This idea got inspired by the belief that{" "}
                <strong>technology</strong> is the pioneer of{" "}
                <strong>civilization</strong> in light of the construct of human
                history. Hence my interest gravitates toward these aspects -
                technology and science.
              </p>
              <br />
              <h3>Learn and share</h3>
              <p>
                Learning how things work technically has always been a hubby.
                Consequently, I have built a career around the things I love to
                do and this blog is also a way for me to share the resolutions
                and results.
              </p>
              <img
                src={require("../images/blogger.jpg")}
                alt=""
                style={{ width: "100%", marginLeft: "0" }}
              />
            </div>
          </section>
        </main>
      </section>

      <section className="empty-space">
        <div></div>
      </section>
    </section>
  );
};
