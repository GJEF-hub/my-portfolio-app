import React from "react";
import "./GjefBlog.css";
import HorizontalScroll from "react-scroll-horizontal";

const GjefBlog = () => {
  //   const child = { width: `100em`, height: `100vh` };
  return (
    <section className="blog-prj-wrapper">
      <main>
        <HorizontalScroll
          pageLock={true}
          reverseScroll={true}
          config={{ stiffness: 100, damping: 11 }}
          animValues={8}
        >
          <section className="slider bg1">
            <div className="slider-flex">
              <div className="slider-item-left">
                <h1>
                  GJEF <br /> Specials <br />
                  Blog
                </h1>
                <p>
                  Beyond Imagination | {"  "}
                  <i className="fa fa-user-o" aria-hidden="true"></i> Godfrey
                  Jeremiah{" "}
                </p>
                <h2>
                  GJEF Specials is an inspiring blog space with engaging content
                  - investigating how humans have evolved with technology,
                  science, and religion.
                </h2>
                <ul className="exp-label-items">
                  <li>
                    <strong>Designed by</strong> <br /> Godfrey Jeremiah
                  </li>
                  <li>
                    <strong>Date</strong> <br /> February 2018
                  </li>
                  <li>
                    <strong>Visit Site</strong> <br />
                    <a href="https://blog.gjefspecials.co.uk" target={"_blank"}>
                      <i className="fa fa-paper-plane"></i> Blog Link
                    </a>
                  </li>
                </ul>
              </div>
              <div className="slider-item-right">
                <img
                  src={require("../images/blog-portfolio.gif")}
                  alt="gjef blog portfolio"
                />
              </div>
            </div>
          </section>

          {/* The second page */}
          <section className="slider bg2">
            <div className="blog-descr-container">
              <div className="blog-descr-content">
                <h1>
                  Attempting to find <strong>answers</strong> to some of the
                  most
                  <strong> daring questions</strong> that we struggle with
                  daily.
                </h1>
                <img
                  src={require("../images/blog-right.gif")}
                  alt="gjef blog portfolio"
                />
              </div>
            </div>
          </section>

          {/* Third page */}

          <section className="slider bg3">
            <div className="slider-flex">
              <div className="slider-item-right">
                <span className="scroll-down"> scroll down</span>
                <span className="down-nav">
                  <a href="#blog-cnt">
                    <i class="fa-solid fa-circle-arrow-down"></i>
                  </a>
                </span>
              </div>
            </div>
          </section>
        </HorizontalScroll>
        <section className="more-content" id="blog-cnt">
          <div className="prj-flex">
            <div className="slider-item-lft">
              <h1>Highly captivating stories with a factitious tone.</h1>
              <p>
                <strong>The Objective</strong>
              </p>
              <p>
                As a writer, I have always wanted to share my content which were
                traditonally on my journals and local drive. The main goal was
                to translate my content into a digital experience that would
                express my thoughts and present my work in a memorable and
                contemporary way.
              </p>
              <p>
                Apart from sharing my thoughts and research content, I equally
                wanted to use the same platform to transfer my skills and career
                journey with others who need some guide.
              </p>
              <div className="featured-blogs">featured blogs</div>

              <div className="grid-laya">
                <div className="grid-items-ds">
                  <img
                    src="https://blog.gjefspecials.co.uk/wp-content/uploads/2021/04/starting-a-blog-600x430.jpg"
                    alt="blog post display"
                  />
                  <span>Easy ways to start a blog</span>
                </div>
                <div className="grid-items-ds">
                  <img
                    src="https://blog.gjefspecials.co.uk/wp-content/uploads/2020/08/linkedin_cover.jpg"
                    alt="blog post display"
                  />
                  <span>7 secrets to finding meaning</span>
                </div>
                <div className="grid-items-ds">
                  <img
                    src="https://blog.gjefspecials.co.uk/wp-content/uploads/2021/04/human-race-600x430.jpg"
                    alt="blog post display"
                  />
                  <span>How the human race evolved</span>
                </div>
                <div className="grid-items-ds">
                  <img
                    src="https://blog.gjefspecials.co.uk/wp-content/uploads/2021/07/security_cover-600x430.jpg"
                    alt="blog post display"
                  />
                  <span>Podcast - Cybersecurity awareness</span>
                </div>
              </div>
            </div>

            <div className="slider-item-rit">
              <img src={require("../images/blog-right.gif")} alt="" />
              <p>
                <strong>The Solution</strong>
              </p>
              <p>
                I came up with a blog inspired by a creative concept that'd give
                visitors a rich experience through my work. The content is
                served on WordPress content management and laid on a
                customisable parallax theme. A few plugins were installed and
                constantly updated to enhance functionality.{" "}
              </p>
              <p>
                The overall website feels classy and well tailored to users
                expectations.
              </p>
            </div>
          </div>
        </section>
        <section className="blogs-box">
          <div className="slider-flex">
            <div className="slider-item-lft">
              <h2>
                The content delivery adapts to users preferences with a
                responsive design across various browsers
              </h2>
              Some of my top articles, stories, and posts are reproduced into
              video and audio podcast to suits certain users preferences across
              different devices and browsers. Luckily, I have the skillset to
              meet these preferences which is excellently expressed in the blog
              platform solution.
            </div>
            <div className="slider-item-rit">
              <div className="grid-laya">
                <div className="grid-items-ds">
                  <iframe
                    width="100%"
                    src="https://www.youtube.com/embed/uJ6M6o2TKoI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="grid-laya">
                <div className="grid-items-ds">
                  <iframe
                    width="100%"
                    src="https://www.youtube.com/embed/LGqbs-LJRRs"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default GjefBlog;
