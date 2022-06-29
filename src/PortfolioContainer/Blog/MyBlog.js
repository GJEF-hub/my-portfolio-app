import React from "react";
import "./MyBlog.css";

const MyBlog = () => {
  return (
    <section className="my-blog-wrapper">
      <header className="my-blog-header">
        <div className="my-blog-tagline">
          <h1>
            Godfrey Jeremiah Blog
            <h5>Technology | Science | Humanity</h5>
            <a
              href="https://blog.gjefspecials.co.uk/"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <h6>Inspiring and Insightful</h6>
            </a>
          </h1>
        </div>
        <div className="prj-nav">
          <a
            href="https://blog.gjefspecials.co.uk"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <button className="verify-btn" style={{ backgroundColor: "#fff" }}>
              <i className="fa fa-paper-plane"></i> Visit Site
            </button>
          </a>
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
              GJEF Blog expresses Godfrey's curiosity to dig deep for hidden
              facts with a twist in a creative approach. In addition to his
              passion for technology mixed with the historical settings of how
              the human society has evolved.
            </p>
            <br />
            <p>
              This idea got inspired by the belief that technology is the
              pioneer of civilization in light of the construct of human
              history. Hence his interest gravitates toward these aspects of a
              human construct.
            </p>
            <blockquote>
              "I consider it crucial that we know the true story behind our
              evolution and how we have evolved as a people. The link to finding
              the fact encapsulated in this story seems broken. I will find it
              in every way that I can. This blog is a way for me to connect
              others to this journey." - Godfrey Jeremiah
            </blockquote>
            <br />
            <hr />
            <div className="users-comments">
              <h4>Users' Comments</h4>

              <blockquote>
                "Woah! I’m really loving the template/theme of this site. It’s
                simple, yet effective. A lot of times it’s very difficult to get
                that “perfect balance” between user friendliness and visual
                appeal. I must say you’ve done a great job with this. Also, the
                blog loads extremely quick for me on Internet explorer.
                Exceptional Blog!" - Agen
              </blockquote>
              <hr />
              <blockquote>
                "Greetings from Ohio! I’m bored to tears at work so I decided to
                check out your blog on my iphone during lunch break. I enjoy the
                information you present here and can’t wait to take a look when
                I get home. I’m surprised at how quick your blog loaded on my
                phone .. I’m not even using WIFI, just 3G .. Anyways, awesome
                blog!" - Wilbur Dillaman
              </blockquote>
              <hr />
              <blockquote>
                "You’re so awesome! I don’t believe I’ve truly read through
                anything like that before. So good to find another person with
                unique thoughts on this topic. Really.. thank you for starting
                this up. This web site is something that is needed on the web,
                someone with a bit of originality!" - Everette Gadomski
              </blockquote>
              <br />
              <p></p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default MyBlog;
