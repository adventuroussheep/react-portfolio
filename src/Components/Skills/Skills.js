import React from "react";
import Parallax from 'parallax-js';


import "./skills.css";

// Front-end images
import bootstrap from "../../Assests/Images/Skills/bootstrap.png";
import css from "../../Assests/Images/Skills/css3.png";
import cssgrid from "../../Assests/Images/Skills/cssgrid.png";
import html from "../../Assests/Images/Skills/html.png";
import javascript from "../../Assests/Images/Skills/javascript.png";
import jquery from "../../Assests/Images/Skills/jquery.png";
import materialui from "../../Assests/Images/Skills/materialui.png";
import sass from "../../Assests/Images/Skills/sass.png";
import react from "../../Assests/Images/Skills/reactjs.png";

// Back-end images
import ajax from "../../Assests/Images/Skills/ajax.png";
import api from "../../Assests/Images/Skills/api.png";
import json from "../../Assests/Images/Skills/json.png";
import node from "../../Assests/Images/Skills/nodejs.png";

// Database images
import mysql from "../../Assests/Images/Skills/mysql.png";
import mongodb from "../../Assests/Images/Skills/mongodb.png";
import firebase from "../../Assests/Images/Skills/firebase.png";


class Skills extends React.Component {

  // Skills hover
  constructor(props){
    super(props)
    this.state = {
      hover1: false,
      hover2: false,
      hover3: false
    }
    this.toggleHover1 = this.toggleHover1.bind(this);
    this.toggleHover2 = this.toggleHover2.bind(this);
    this.toggleHover3 = this.toggleHover3.bind(this);
  }
  
  toggleHover1(){
    this.setState({hover1: !this.state.hover1})
  }

  toggleHover2(){
    this.setState({hover2: !this.state.hover2})
  }


  toggleHover3(){
    this.setState({hover3: !this.state.hover3})
  }


  render() {

    var Style1;
    if (this.state.hover1){
      Style1 = {display: 'none'}
    // } else {
    //   Style1 = {display: 'inline-grid'}
    }


    var Style2;
    if (this.state.hover2){
      Style2 = {display: 'none'}
    // } else {
    //   Style2 = {display: 'inline-grid'}
    }


    var Style3;
    if (this.state.hover3){
      Style3 = {display: 'none'}
    // } else {
    //   Style3 = {display: 'inline-grid'}
    }


    const script = document.createElement("script");

    script.src = "https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js";
    script.async = true;

    document.body.appendChild(script);

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);


    return (
      <div>

        {/* Mobile Divs */}
      <div className="mobileWrapper">
        <div className="mobileBackground">

        <h1 className="mobileHeader">Front-End</h1>
        <div className="mobileFrontEnd">
        <img src={bootstrap} className="skillsImg" alt="bootstrap"></img>
    
            <img src={css} className="skillsImg cssImg" alt="css"></img>
            <img src={cssgrid} className="skillsImg cssGridImg" alt="cssgrid"></img>
            <img src={html} className="skillsImg htmlImg" alt="html"></img>
            <img src={javascript} className="skillsImg jsImg" alt="javascript"></img>
            <img src={jquery} className="skillsImg jQueryImg" alt="jquery"></img>
            <img src={materialui} className="skillsImg muImg" alt="materialui"></img>
            <img src={sass} className="skillsImg sassImg" alt="sass"></img>
            <img src={react} className="skillsImg reactImg" alt="react"></img>
        </div>



        <h1 className="mobileHeader">Back-End</h1>
        <div className="mobileBackEnd">
          <div>
            <img src={ajax} className="skillsImg ajaxImg" alt="ajax"></img>
            <p>Ajax</p>
          </div>
            <img src={api} className="skillsImg apiImg" alt="api"></img>
            <img src={json} className="skillsImg jsonImg" alt="json"></img>
            <grid-item></grid-item>
            <img src={node} className="skillsImg nodeImg" alt="node"></img>
  
        </div>



        <h1 className="mobileHeader">Database</h1>
        <div className="mobileDB">
        <img
              src={firebase}
              className="skillsImg firebaseImg imgResize"
              alt="firebase"
              ></img>
            <img
              src={mongodb}
              className="skillsImg mongoImg"
              alt="mongodb"
              ></img>
            <img src={mysql} className="skillsImg imgResize" alt="mysql"></img>
        </div>
    </div>
  </div>

  {/* End of Mobile Divs */}

        {/* Parallax Effect */}
        <ul id="scene" className="sceneClass">
      <div className="skillsBackground layer" data-depth="0.1">
        </div>
        </ul>
      <div className="backgroundOverlay">
      
      {/* <div>

        <div className="container">

      <ul id="scene">
      <div className="layer" data-depth="0.4" id="bg" >
        </div>
      <li className="layer" data-depth="0.2"><img className="" src={node} alt="node"/></li>
        <li className="layer" data-depth="0.8"><img className="" src={node} alt="node"/></li>
        <li className="layer" data-depth="0.2"><img className="" src={node} alt="node"/></li>
      </ul>
      </div>
      </div> */}

        <div className="skillsWrapper">


{/* Mobile Divs */}
      {/* <div className="mobileWrapper">
        <div className="mobileBackground">

        <h1 className="mobileHeader">Front-End</h1>
        <div className="mobileFrontEnd">
        <img src={bootstrap} className="skillsImg" alt="bootstrap"></img>
    
            <img src={css} className="skillsImg cssImg" alt="css"></img>
            <img src={cssgrid} className="skillsImg cssGridImg" alt="cssgrid"></img>
            <img src={html} className="skillsImg htmlImg" alt="html"></img>
            <img src={javascript} className="skillsImg jsImg" alt="javascript"></img>
            <img src={jquery} className="skillsImg jQueryImg" alt="jquery"></img>
            <img src={materialui} className="skillsImg muImg" alt="materialui"></img>
            <img src={sass} className="skillsImg sassImg" alt="sass"></img>
            <img src={react} className="skillsImg reactImg" alt="react"></img>
        </div>



        <h1 className="mobileHeader">Back-End</h1>
        <div className="mobileBackEnd">
          <div>
            <img src={ajax} className="skillsImg ajaxImg" alt="ajax"></img>
            <p>Ajax</p>
          </div>
            <img src={api} className="skillsImg apiImg" alt="api"></img>
            <img src={json} className="skillsImg jsonImg" alt="json"></img>
            <grid-item></grid-item>
            <img src={node} className="skillsImg nodeImg" alt="node"></img>
  
        </div>



        <h1 className="mobileHeader">Database</h1>
        <div className="mobileDB">
        <img
              src={firebase}
              className="skillsImg firebaseImg imgResize"
              alt="firebase"
              ></img>
            <img
              src={mongodb}
              className="skillsImg mongoImg"
              alt="mongodb"
              ></img>
            <img src={mysql} className="skillsImg imgResize" alt="mysql"></img>
        </div>
    </div>
  </div> */}

  {/* End of Mobile Divs */}

        <div style={{...Style2, ...Style3}} onMouseEnter={this.toggleHover1} onMouseLeave={this.toggleHover1} className="databaseWrapper">
          <h2>Database</h2>
          <div className="database">
            <img src={mysql} className="skillsImg imgResize" alt="mysql"></img>
            <grid-item></grid-item>
            <img
              src={mongodb}
              className="skillsImg mongoImg"
              alt="mongodb"
              ></img>

            <grid-item></grid-item>
            <img
              src={firebase}
              className="skillsImg firebaseImg imgResize"
              alt="firebase"
            ></img>
            <grid-item></grid-item>
          </div>
        </div>


        <div style={{...Style1, ...Style3}} onMouseEnter={this.toggleHover2} onMouseLeave={this.toggleHover2}  className="frontEndWrapper" id="feId">
          <h2>Front-End</h2>
          <div className="frontEnd">
            <grid-item></grid-item>
            <grid-item></grid-item>
            <img src={bootstrap} className="skillsImg" alt="bootstrap"></img>
            <grid-item></grid-item>
            <grid-item></grid-item>

            <grid-item></grid-item>
            <img src={css} className="skillsImg cssImg" alt="css"></img>
            <grid-item></grid-item>
            <img src={cssgrid} className="skillsImg cssGridImg" alt="cssgrid"></img>
            <grid-item></grid-item>

            <img src={html} className="skillsImg htmlImg" alt="html"></img>
            <grid-item></grid-item>
            <img src={javascript} className="skillsImg jsImg" alt="javascript"></img>
            <grid-item></grid-item>
            <img src={jquery} className="skillsImg jQueryImg" alt="jquery"></img>

            <grid-item></grid-item>
            <img src={materialui} className="skillsImg muImg" alt="materialui"></img>
            <grid-item></grid-item>
            <img src={sass} className="skillsImg sassImg" alt="sass"></img>
            <grid-item></grid-item>

            <grid-item></grid-item>
            <grid-item></grid-item>
            <img src={react} className="skillsImg reactImg" alt="react"></img>
          </div>
        </div>


        <div style={{...Style1, ...Style2}} onMouseEnter={this.toggleHover3} onMouseLeave={this.toggleHover3} className="backEndWrapper" id="beId">
          <h2>Back-End</h2>
          <div className="backEnd">
          <grid-item></grid-item>
            <img src={ajax} className="skillsImg ajaxImg" alt="ajax"></img>
            <grid-item></grid-item>

            <img src={api} className="skillsImg apiImg" alt="api"></img>
            <grid-item></grid-item>
            <img src={json} className="skillsImg jsonImg" alt="json"></img>

            <grid-item></grid-item>
            <img src={node} className="skillsImg nodeImg" alt="node"></img>
            <grid-item></grid-item>
          </div>
        </div>

        </div>
        </div>
    </div>
    );
  }
}

export default Skills;
