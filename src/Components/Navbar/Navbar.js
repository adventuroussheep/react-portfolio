import React from "react";
import './navbar.css';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
 
import pdf from "../../Assests/Jacob_Haas_Resume.pdf";

class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="aboutScroll" spy={true} smooth={true} offset={-200} duration={500} onSetActive={this.handleSetActive}>
            <div className="navName">
              Jacob Haas
              </div>
              <div className="navNameMoble">
              jHaas
              </div>
        </Link>

        <div className="">

          <Link to="skillsScroll" spy={true} smooth={true} offset={-60} duration={500} onSetActive={this.handleSetActive}>
        <button className="buttonClass">Skills</button>
          </Link>

          <Link to="projectsScroll" spy={true} smooth={true} offset={-60} duration={500} onSetActive={this.handleSetActive}>
        <button className="buttonClass">Projects</button>&nbsp;&nbsp;&nbsp;
          </Link>

          <a href={pdf} download="Jacob_Haas_Resume" target="_blank" className="buttonClass">Resume</a>

        </div>
        {/* <button type="button" className="btn btn-info">Info</button> */}
{/* <button type="button" className="btn btn-light">Light</button> */}
{/* <button type="button" className="btn btn-dark">Dark</button> */}
      </nav>
    );
  }
}
export default Navbar;
