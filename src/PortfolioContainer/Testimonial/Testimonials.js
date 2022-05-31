import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-wrapper" id="testimonials">
      <div className="testimonials-container">
        <section className="features">
            <header>
              <h1 className="section-header">Testimonials</h1>
          </header>
          <ul className="testimonials">
            <li>
              <img
                src="https://i.imgur.com/j5dUNWX.jpeg"
                alt="Testimonials images"
              />
              <blockquote>
                "I could think of many phrases to describe Godfrey, but one
                stands out the most - <strong>Committed</strong>. I had the
                pleasure of tutoring Godfrey on an IT Support Specialist course,
                which lasted just under a year. The course itself covered
                numerous CompTIA and Microsoft modules. Godfrey excelled at all.
                What stood out most for me was his appetite for knowledge and
                use of what he had learned. We had many interesting and varied
                chats, not all technical! Any employer would be fortunate to
                have Godfrey work for them. I wish him all the best!"
              </blockquote>
              <cite>
                {" "}
                - Stephen Mernagh <br />{" "}
                <span>IT Tutor, Cenit College, Ireland</span>{" "}
              </cite>
            </li>
            <li>
              <img
                src="https://i.imgur.com/GdQ6UvZ.jpeg"
                alt="Testimonials images"
              />
              <blockquote>
                "Godfrey is an amazing person to work with. He brilliantly
                executed the vision of the website I wanted from consultation to
                execution. I wanted a simple yet visually appealing website and
                he delivered on my goal.i also appreciated that Godfrey has
                exceptional client services, professional - friendly always
                listening and very patient. I did not feel bamboozled with techy
                language but he gladly explained and taught me how to get the
                best from the website with relevant recommendations. A creative
                mind himself, he helped me with ideas and suggestions on how to
                better manage my website. His enthusiasm is catchy and his
                dedication to his work commendable. I was definitely impressed
                and would gladly recommend him to anyone who requires a top
                notch website."
              </blockquote>
              <cite>
                {" "}
                - Gladys Otono Atsenokhai (MC SHAKARA) <br />{" "}
                <span>PR Professional,Corporate Events Host, Ireland</span>{" "}
              </cite>
            </li>
            <li>
              <img
                src="https://i.imgur.com/nScERzM.png"
                alt="Testimonials images"
              />
              <blockquote>
                "Godfrey is one of the best colleagues whom I have studied so
                far. He is helpful, mindful, and open to learning new things all
                the time. I enjoyed learning with him in the same classroom."
              </blockquote>
              <cite> - Manuel DurÃ¡n </cite>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
