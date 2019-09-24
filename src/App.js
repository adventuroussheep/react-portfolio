import React from 'react';
import './App.css';
import AboutPage from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="">
      <header name="aboutScroll">
        <Navbar/>
      </header>
      <AboutPage/>
        <h1 className="brText" name="skillsScroll">Skills</h1>
      <Skills/>
      <div>
        <h1 className="brText" name="projectsScroll">Projects</h1>
      </div>
      <Projects/>
    </div>
  );
}

export default App;
