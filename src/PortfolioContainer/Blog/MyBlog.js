import React from "react";
import "./MyBlog.css";

const MyBlog = () => {
  return (
    <section className="my-blog-wrapper">
      <header className="my-blog-header">
        <div className="my-blog-tagline">
          <h1
            style={{
              backgroundColor: "rgba(8, 8, 1, 0.442)",
              width: "520px",
              fontFamily: "Roboto",
              fontSize: "300%",
              fontWeight: "600",
              margin: "100px 150px ",
              textAlign: "left",
              padding: "5px 15px",
            }}
          >
            Godfrey Jeremiah Blog
            <h5 style={{ wordSpacing: "10px" }}>
              Technology | Science | Humanity
            </h5>
            <h6
              style={{
                backgroundColor: "rgb(237, 211, 66)",
                width: "40%",
                color: "#000",
                padding: "15px 5px",
                margin: "0 0 -5px -15px",
                textAlign: "center",
              }}
            >
              Inspiring and Insightful
            </h6>
          </h1>
        </div>
      </header>

      {/* Start of Main body sections */}

      <section className="my-blog-container">
        <section className="my-blog-flex">
          <div className="my-blog-left">
            <h3>Explore blog posts</h3>
            <article className="article-grid">
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
                      href="https://blog.gjefspecials.co.uk/2020/08/10/comptia-security-how-to-pass-with-100-success/"
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
              </div>
            </article>
          </div>

          {/* Start of right side column */}

          <div className="my-blog-right">
            <h5>Some Videos</h5>
            <div className="grid-laya">
              <div className="grid-items-ds">
                <iframe
                  src="https://www.youtube.com/embed/OO86VCRFRO0"
                  title="The Future; Artificial Intelligence Vs Humanity"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <span>The Future - AI Vs Humanity</span>
              </div>
              <div className="grid-items-ds">
                <iframe
                  src="https://www.youtube.com/embed/2Ae3yeN5pfw"
                  title="Back to Normal Episode 3: Let's Talk Cyber Security"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <span>Cybersecurity awareness</span>
              </div>
              <div className="grid-items-ds">
                <iframe
                  src="https://www.youtube.com/embed/uJ6M6o2TKoI"
                  title="Understanding Humanity: The good in us is weak"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <span>Understanding why we're fallible</span>
              </div>
            </div>
          </div>
        </section>

        {/* Start of other part of main */}

        <section className="gjefblog-history">
          <div className="about-gjef-web">
            <h2>
              A combination of creativity and polished writing wrapped in a
              techy-nerd.
            </h2>
            <p>
              GJEF Blog is an expression of Godfrey's curiosity to dig deep for
              hidden facts with a twist of creative approach. In addition to his
              passion for technology mixed with the historical settings of how
              the human society has evolved.
            </p>
            <br />
            <p>
              What facilitated him was the belief that{" "}
              <strong>technology</strong> is the pioneer of{" "}
              <strong>civilization</strong> in light of the construct of
              history. To say the least, how his interest gravitates toward
              these aspects of a human construct.
            </p>
            <blockquote>
              "I consider it crucial that we know the true story behind our
              evolution and how we have evolved as a people. The link to finding
              the fact encapsulated in this story seems broken. I will find it
              in every way that I can. This blog is a way for me to connect
              others to this journey." - Godfrey Jeremiah
            </blockquote>
          </div>
        </section>
      </section>
    </section>
  );
};

export default MyBlog;
