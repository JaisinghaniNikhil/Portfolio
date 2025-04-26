import React from 'react';
import work from '../assets/work.avif';
import '../cssfiles/intro.css';

function Intro() {
  return (
    <div className='container'>
      <div className='incont1'>
        <label className='intro-label'>Hello, My Name is</label>
        <h2>NIKHIL <br /> JAISINGHANI</h2>
        <h3>From concept to code — creating elegant digital solutions.</h3>
        <p className='intro-text'>
          I’m a developer who loves learning new things and building projects that make a difference.
          I enjoy exploring new technologies, improving my skills, and turning ideas into real, useful applications.
        </p>
        <button className='cv-btn'>  <a 
          href="../../public/JNIKHIL.pdf"
          target="_blank" 
          rel="noopener noreferrer" 
        >
          View CV
        </a></button>
      </div>

      <div className='incont2'>
        <img src={work} alt='Work' />
      </div>
    </div>
  );
}

export default Intro;
