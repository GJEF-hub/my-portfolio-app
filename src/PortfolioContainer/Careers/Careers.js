import React from 'react';
import "./Careers.css";
import Career from "../Career/Career";
import { Link } from "react-router-dom";

function Careers() {
  return (
    <section className='parent-container' id='careers'>
      <div className='wrapper'>
        <header>
          <h1 className="section-header">Career</h1>
        </header>
        <div className='career-picture'>
        <div className='career-bg-picture'></div>
        </div>
        <a href='#1'> <button className='blogger-link but'>Blogger</button></a>
        <button className='engineer-link but'>IT Sys Engineer</button>
        <button className='designer-link but'>Cr8ve Designer</button>
        <button className='tutor-link but'>IT Tutor</button>
        <p className='description'>Godfrey is a process-oriented and solution-driven professional
                with over 6 years of working experience in creating interactive
                and user-centered designs; with a creative eye for design and
                details.
        </p>
        <Link to="/summary"><button className='verify-btn'>Read More</button></Link>
      </div>
      {/* <div className='careers-detail'>
       
       
       </div> */}
    </section>

   
  )
}


export default Careers