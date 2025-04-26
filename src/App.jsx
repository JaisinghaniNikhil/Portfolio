import React from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className='main'>
      <Header />
      <Intro />
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}

export default App
