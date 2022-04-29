import React, { useState, useEffect } from "react";
import "./Career.css";
import CareerHistory from "./CareerHistory";

function Career() {
  const [experience, editExperience] = useState([
    {
      id: 1,
      Position: "Developer & Blogger",
      Organisation: "GJEF Specials",
      Yr: "2018 to 2022 (4 years)",
      Experience:
        "Organized, reviewed, researched, and analyzed user interactivity with web interface and web content. Subsequently implored trending techniques in designing and developing user-friendly websites with reasonable load speed, secured access, engaging visual layouts, optimized content with continuous improvement, and great reviews.",
    },
    {
      id: 2,
      Position: "IT Operations Specialist",
      Organisation: "GJEF Ventures",
      Yr: "2012 to 2018 (6 years)",
      Experience:
        "Planned, managed, maintained, and implemented a robust IT infrastructure as well as provided technical support to vast users in a fast-paced business environment with over 80% efficiency in service delivery with excellent customer relations.",
    },
    {
      id: 3,
      Position: "Designer & Tutor",
      Organisation: "GCC Computers",
      Yr: "2007 to 2009 (3 years)",
      Experience:
        "Introduced, authored, designed content and promotional materials for marketing and training purposes. Also trained, mentored, assessed, and evaluated over 100 students in IT. "
    },
  ]);

  const manageDelete = (id) => {
    const newExperience = experience.filter(experience => experience.id !== id);
    editExperience(newExperience);
  }
  

  useEffect (() => {

  })

  return (
    <section className="career-container" id="career">
      <CareerHistory experience={experience} manageDelete={manageDelete} />
    </section>
  );
}

export default Career;
