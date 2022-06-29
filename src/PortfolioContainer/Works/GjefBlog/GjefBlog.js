import React from "react";
import "./GjefBlog.css";
import { Link } from "react-router-dom";

const GjefBlog = () => {
  return (
    <section className="blog-prj-wrapper">
      <main>
        <section className="slider bg1">
          <div className="slider-flex">
            <div className="slider-item-left">
              <h1>
                GJEF <br /> Specials <br />
              </h1>
              <p>
                Beyond Imagination |{" "}
                <i className="fa fa-user-o" aria-hidden="true"></i> Godfrey J.{" "}
              </p>
              <h2>
                GJEF Specials is an inspiring blog space with engaging content -
                investigating how humans have evolved with technology, science,
                and religion.
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
                  <a
                    href="https://blog.gjefspecials.co.uk"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
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

        <section className="more-content" id="blog-cnt">
          <div className="prj-flex">
            <div className="slider-item-lft">
              <h1>Highly captivating stories with a factitious tone.</h1>
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
              <div className="featured-blogs">featured blogs</div>

              <div className="grid-laya">
                <div className="grid-items-ds">
                  <img
                    src="https://blog.gjefspecials.co.uk/wp-content/uploads/2021/04/starting-a-blog-600x430.jpg"
                    alt="blog post display"
                  />
                  <span>
                    {" "}
                    <a
                      href="https://blog.gjefspecials.co.uk/2021/04/25/starting-a-blog-in-2021-easy-guide-for-beginners/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Easy ways to start a blog
                    </a>
                  </span>
                </div>
                <div className="grid-items-ds">
                  <img
                    src="https://blog.gjefspecials.co.uk/wp-content/uploads/2020/08/linkedin_cover.jpg"
                    alt="blog post display"
                  />
                  <span>
                    {" "}
                    <a
                      href="https://blog.gjefspecials.co.uk/2020/08/25/know-yourself-the-key-to-meaning-and-fulfillment/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      7 secrets to finding meaning
                    </a>
                  </span>
                </div>
                <div className="grid-items-ds">
                  <img
                    src="https://blog.gjefspecials.co.uk/wp-content/uploads/2021/04/human-race-600x430.jpg"
                    alt="blog post display"
                  />
                  <span>
                    <a
                      href="https://blog.gjefspecials.co.uk/2021/04/13/the-human-race-diaries-of-godfrey-jeremiah/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      How the human race evolved
                    </a>
                  </span>
                </div>
                <div className="grid-items-ds">
                  <img
                    src="https://blog.gjefspecials.co.uk/wp-content/uploads/2021/07/security_cover-600x430.jpg"
                    alt="blog post display"
                  />
                  <span>
                    <a
                      href="https://blog.gjefspecials.co.uk/2021/07/03/lets-talk-cyber-security-back-to-normal-eps-3/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Podcast - Cybersecurity awareness
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="slider-item-rit">
              <img
                src={require("../images/blog-right.gif")}
                alt=""
                className="animated-screen"
              />
              <p>
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
            </div>
          </div>
        </section>
        <section className="blogs-box">
          <div className="slider-flex">
            <div className="slider-item-lft">
              <h2>
                The content delivery adapts to users' preferences with a
                responsive design across browsers
              </h2>
              <p>
                Some of my top articles, stories, and posts are reproduced into
                video and audio podcasts to suit users' preferences across
                different devices and browsers. Luckily, I have the skillset to
                meet these preferences which are expressed in the blog platform
                solution{" ..."}
                <Link
                  to="./about-me"
                  style={{ color: "#grey", backgroundColor: "orange" }}
                >
                  Read about me
                </Link>
              </p>

              <br />
              <p>
                The blog is progressively inserting new techniques to meet the
                big picture. So I'd consider it to be a work in progress as I
                implore new ideas, better techniques as well as I examine
                analytical data from users.
              </p>
              <img
                src={require("../images/blog-anim-ds.gif")}
                alt=""
                className="animated-screen"
              />
            </div>
            <div className="slider-item-rit">
              <div className="grid-laya">
                <div className="grid-items-ds">
                  <iframe
                    width="100%"
                    src="https://www.youtube.com/embed/uJ6M6o2TKoI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="grid-laya">
                <div className="grid-items-ds">
                  <iframe
                    width="100%"
                    src="https://www.youtube.com/embed/LGqbs-LJRRs"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <h2>
                Data analytics <p>Tools integration</p>
              </h2>

              <p>
                The blog site uses both{" "}
                <em style={{ backgroundColor: "orange" }}>
                  <a href="https://www.semrush.com/" target={"_blank"}>
                    Semrush
                  </a>
                </em>{" "}
                and
                <em style={{ backgroundColor: "orange" }}>
                  {" "}
                  <a href="https://analytics.google.com/" target={"_blank"}>
                    Google Analytics
                  </a>{" "}
                </em>
                tools to investigate site performance, gain traffic insights,
                and implement link building.
              </p>
              <p>
                Also, each blog post is accompanied by buttons that allow users
                to share thumbnail-induced links to several media networks
                easily.
              </p>
              <p>
                These techniques help greatly in conducting keyword research for
                my blogs, to make informed decision on my content, and to
                brainstorm for new ideas.
              </p>
            </div>
          </div>
        </section>

        <section className="slider bg2">
          <div className="slida-flex">
            <div className="slider-item-left">
              <h1>
                In search <br /> for facts?
              </h1>

              <h2>
                The blog takes you on a journey through time with insights on
                subjects that'd blow your mind.
              </h2>
              <p>
                I am committed to ensuring that every visitor to this blog gets
                that feeling by being consistent with the appearance of each
                post, the syncing of graphics with the background theme, and the
                pace of publishing.
              </p>
              <p>
                The titling, introduction, leading paragraphs, summaries, and
                excerpts are usually well mapped out before publishing.
              </p>
            </div>
            <div className="slider-item-right">
              <img src={require("../images/blog-portfolio.gif")} alt="" />
            </div>
          </div>
        </section>

        <section className="blogs-grid">
          <div className="title-label">
            <h2>
              A combination of creativity and polished writing wrapped in a
              techy-nerd.
            </h2>
            <p>
              GJEF Blog is an expression of my curiosity to dig deep for hidden
              facts with a twist of creative approach. Alongside my passion for
              technology mixed with the historical settings of how the human
              society has evolved.
            </p>
            <br />
            <p>
              This idea got inspired by the belief that
              <strong>technology</strong> is the pioneer of{" "}
              <strong>civilization</strong> in light of the construct of human
              history. Hence my interest gravitates toward these aspects of a
              human construct - tech and science.
            </p>
            <p>
              I consider it crucial that we know the true story behind our
              evolution and how we have evolved as a people. The link to finding
              the fact encapsulated in this story seems broken. I will find it
              in every way that I can. This blog is a way for me to connect
              others to this journey.
            </p>
          </div>
          <div className="blog-mission-box">
            <img src={require("../images/blogger.jpg")} alt="" />
            <p>
              <h2>Learn and Share</h2>
              Learning how things work technically has always been a hubby.
              Consequently, I have built a career around the things I love to do
              and this blog is also a way for me to share the resolutions and
              results. Hence, the category tagged as{" "}
              <strong
                style={{
                  fontFamily: "sans-serif",
                  color: "#000",
                }}
              >
                MyJourney
              </strong>
              <br /> <br />
              <h3>Self-learning Path to Becoming a Software Engineer</h3>
              <p>
                MyJourney is an initiative to help beginners learn how to code
                and become software developers. It is an ongoing project which I
                developed to help others who are interested in a software or
                programming career to learn with ease collaboratively.
              </p>
              <p>
                For now, I am integrating MyJourney as a separate category in
                the webblog. Features would include career mentorship and
                coaching, free tutorials, roadmap to different areas of
                programming career, and so on.
              </p>
            </p>
          </div>
        </section>
        <section className="blog-sample-list">
          <div className="blog-lists-box">
            <h4>featured blogs</h4>
            <div className="grid-laya">
              <div className="grid-items-ds">
                <img
                  src="https://blog.gjefspecials.co.uk/wp-content/uploads/2018/07/adam-600x430.jpg"
                  alt="blog post display"
                />
                <span>
                  <a
                    href="https://blog.gjefspecials.co.uk/2021/05/03/god-diaries-of-godfrey-jeremiah-eps-3/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Did we invent God?
                  </a>
                </span>
              </div>
              <div className="grid-items-ds">
                <img
                  src="https://blog.gjefspecials.co.uk/wp-content/uploads/2021/04/music-mysteries-600x430.jpg"
                  alt="blog post display"
                />
                <span>
                  <a
                    href="https://blog.gjefspecials.co.uk/2021/04/21/music-diaries-of-godfrey-jeremiah-eps-2/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The mysteries of music revealed
                  </a>
                </span>
              </div>
              <div className="grid-items-ds">
                <img
                  src="https://blog.gjefspecials.co.uk/wp-content/uploads/2021/03/beliefs-600x430.jpg"
                  alt="blog post display"
                />
                <span>
                  {" "}
                  <a
                    href="https://blog.gjefspecials.co.uk/2021/03/09/ignorance-gave-birth-to-religion/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ignorance gave birth to religion
                  </a>
                </span>
              </div>
              <div className="grid-items-ds">
                <img
                  src="https://blog.gjefspecials.co.uk/wp-content/uploads/2020/12/sleep_the_dream_world-600x430.jpg"
                  alt="blog post display"
                />
                <span>
                  <a
                    href="https://blog.gjefspecials.co.uk/2020/12/08/sleep-something-deep-you-are-actually-experiencing-but-not-paying-attention-to/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    What you should know about sleep
                  </a>
                </span>
              </div>
              <div className="grid-items-ds">
                <img
                  src="https://blog.gjefspecials.co.uk/wp-content/uploads/2020/12/retrieve-deleted-files-in-Windows-600x430.jpg"
                  alt="blog post display"
                />
                <span>
                  <a
                    href="https://blog.gjefspecials.co.uk/2020/12/09/retrieve-deleted-files-in-windows-with-ease/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    How to retrieve lost files
                  </a>
                </span>
              </div>
              <div className="grid-items-ds">
                <img
                  src="https://blog.gjefspecials.co.uk/wp-content/uploads/2020/08/CompTIA_Security_Plus-600x430.jpg"
                  alt="blog post display"
                />
                <span>
                  {" "}
                  <a
                    href="https://blog.gjefspecials.co.uk/2020/08/10/comptia-security-how-to-pass-with-100-success/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    How to pass IT certs
                  </a>
                </span>
              </div>
              <div className="grid-items-ds">
                <img
                  src="https://blog.gjefspecials.co.uk/wp-content/uploads/2021/09/indeex-600x430.jpeg"
                  alt="blog post display"
                />
                <span>
                  {" "}
                  <a
                    href="https://blog.gjefspecials.co.uk/2021/09/26/in-a-selfish-world-everyone-is-a-player-in-the-game/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Everyone is a player in the game
                  </a>
                </span>
              </div>
              <div className="grid-items-ds">
                <img
                  src="https://blog.gjefspecials.co.uk/wp-content/uploads/2020/08/love_changes_everything-600x430.jpg"
                  alt="blog post display"
                />
                <span>
                  {" "}
                  <a
                    href="https://blog.gjefspecials.co.uk/2020/08/14/love-is-changing-the-way-i-think-about-life/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Love as an instrument for change
                  </a>
                </span>
              </div>
              <div className="grid-items-ds">
                <img
                  src="https://blog.gjefspecials.co.uk/wp-content/uploads/2018/05/the-mind-768x384.jpg"
                  alt="blog post display"
                />
                <span>
                  {" "}
                  <a
                    href="https://blog.gjefspecials.co.uk/2018/05/25/engaging-your-consciousness-gjef-specials/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Secrets of consciousness
                  </a>
                </span>
              </div>
              <div className="grid-items-ds">
                <img
                  src="https://blog.gjefspecials.co.uk/wp-content/uploads/2021/08/scarface-money.gif"
                  alt="blog post display"
                />
                <span>
                  {" "}
                  <a
                    href="https://blog.gjefspecials.co.uk/2021/09/01/money-is-primarily-what-drives-chaos/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Money - how it started
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default GjefBlog;
