import React from 'react'
import '../cssfiles/about.css'
import ME from '../assets/me.png'

function About() {
  return (
    <div className='about'>
        <h2 id='me1'>About Me</h2>
        <div className='aboutme'>
            <div className='myimg'>
                <img src={ME} alt='MYimg'/>
            </div>
            <div className='myinfo'>
                <h2>Jaisinghani Nikhil</h2>
                <label>I am a passionate and dedicated full-stack developer with a strong command of both frontend and backend technologies. As a 2025 B.Sc. IT graduate, I have developed multiple projects that demonstrate my ability to build complete digital solutions.
                <br/><br/>
                My experience includes building responsive web applications using React.js, HTML, CSS, and JavaScript, and creating mobile apps with React Native. On the backend, I’ve worked with Node.js, Express.js, and MongoDB to develop reliable and scalable systems.
                <br/> <br/>
                I enjoy transforming ideas into real-world applications and am always eager to explore new challenges. I’m currently looking for opportunities that align with my skills and allow me to contribute meaningfully while continuing to grow as a developer.</label>
            </div>
        </div>
    </div>
  )
}

export default About