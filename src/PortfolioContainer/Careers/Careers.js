import React from 'react';
import "./Careers.css";
import Career from "../Career/Career";


function Careers() {
  return (
    <section className='parent-container' id='careers'>
      <div className='wrapper'>
        <div className='title'><h1>Career</h1></div>
        <div className='career-picture'>
        <div className='career-bg-picture'></div>
        </div>
        <a href='#1'> <button className='blogger-link but'>Blogger</button></a>
        <button className='engineer-link but'>IT Sys Engineer</button>
        <button className='designer-link but'>UI/UX Designer</button>
        <button className='tutor-link but'>IT Tutor</button>
      </div>
      <div className='careers-detail'>
       <Career />
       </div>
    </section>

   
  )
}


export default Careers