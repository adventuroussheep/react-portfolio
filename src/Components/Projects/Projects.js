import React from "react";
import "./projects.css";

import Plantify from "../../Assests/Images/plantify.JPG";
import Jamsesh from "../../Assests/Images/jamsesh.JPG";
import RPG from "../../Assests/Images/rpg.JPG";
import Train from "../../Assests/Images/train.JPG";
import Memory from "../../Assests/Images/memoryGame.JPG";


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

class Projects extends React.Component {
    render(){
        return(
            <div className="Wrapper">
                <div></div>


                <div className="plantifyOverlay">
                    <div className="projectContainer">
                        <img src={materialui} className="techImg" alt="material ui"></img>
                        <img src={react} className="techImg" alt="material ui"></img>
                        <img src={mongodb} className="techImg" alt="material ui"></img>

                        <span>Top
                        <img className="projectImg" src={Plantify} alt="Plantify App">

                        </img>

                        </span>
                    </div>
                        
                </div>
                <div className="plantifyOverlay">
                    <img className="projectImg" src={Jamsesh} alt="Jamsesh App"></img>
                    <span>Top</span>
                    <img src={react} className="techImg" alt="material ui"></img>
                </div>
                <div></div>
                <div></div>
                <div className="plantifyOverlay">
                    <img className="projectImg" src={RPG} alt="RPG App"></img>
                    <span>Top</span>
                    <img src={react} className="techImg" alt="material ui"></img>
                </div>
                <div className="plantifyOverlay">
                    <img className="projectImg" src={Train} alt="Train App"></img>
                    <span>Top</span>
                </div>
                <div></div>
                <div></div>
                <div className="plantifyOverlay">
                    <img className="projectImg" src={Memory} alt="Memory App"></img>
                    <span>Top</span>
                </div>
                <div className="plantifyOverlay">
                    <img className="projectImg" src={Plantify} alt="Plantify App"></img>
                    <span>Top</span>
                </div>
            </div>
        )
    }
}

export default Projects;