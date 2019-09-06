import React from "react";

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


    return (
      <div className="skillsBackground">
      <div className="backgroundOverlay">

        <div className="skillsWrapper">
        <div style={{...Style2, ...Style3}} onMouseEnter={this.toggleHover1} onMouseLeave={this.toggleHover1} className="databaseWrapper">
          <h1>Database</h1>
          <div class="database">
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
          <h1>Front-End</h1>
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
          <h1>Back-End</h1>
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
