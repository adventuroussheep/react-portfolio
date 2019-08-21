import React from 'react';
import './App.css';
import AboutPage from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="">
      <header className="">
        <Navbar/>
      </header>
      <AboutPage/>
    </div>
  );
}

export default App;
