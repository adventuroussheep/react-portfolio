import React from 'react';
import './App.css';
import AboutPage from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="">
      <header className="">
        <Navbar/>
      </header>
      <AboutPage/>
      <div>
        <h1>Projects</h1>
      </div>
      <Projects/>
    </div>
  );
}

export default App;
