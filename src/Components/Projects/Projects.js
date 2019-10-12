import React from "react";
import "./projects.css";

import Plantify from "../../Assests/Images/plantify.JPG";
import Jamsesh from "../../Assests/Images/jamsesh.JPG";
import RPG from "../../Assests/Images/rpg.JPG";
import Train from "../../Assests/Images/train.JPG";
import Memory from "../../Assests/Images/memoryGame.JPG";
import Construction from "../../Assests/Images/comingSoon.jpg"


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
       var state ={
            count: 0,
            plus: 1,
        }

        // Styles
        var invis = {visibility: 'hidden'};


        // Links for projects

        function open_plantify(){
            window.open("http://www.plantify.io/")
            window.open("https://github.com/nicoviarnes/plant-id")
        }

        function open_jam() {
            window.open("http://www.jamsesh.xyz/")
            window.open("https://github.com/nicoviarnes/project-2")
        }

        function open_rpg() {
            window.open("https://adventuroussheep.github.io/RPG-Game/")
            window.open("https://github.com/adventuroussheep/RPG-Game")
        }

        function open_train() {
            window.open("https://adventuroussheep.github.io/TrainSchedule/")
            window.open("https://github.com/adventuroussheep/TrainSchedule")
        }

        // var count = 0;
        function open_memory() {
                window.open("https://boiling-refuge-87399.herokuapp.com/")
                window.open("https://github.com/adventuroussheep/Memory-Game")
        }

        function open_const() {
            window.open("https://github.com/adventuroussheep/geo-sass")
        }


            

        return(
            <div className="Wrapper">
                <div></div>


{/* Plantify */}
                <div className="plantifyOverlay">
                    <div className="projectContainer">
                        <img src={materialui} className="techImg" alt="material ui"></img>
                        <img src={react} className="techImg" alt="react"></img>
                        <img src={css} className="techImg" alt="css"></img>
                        <img src={api} className="techImg" alt="api"></img>
                        <img src={node} className="techImg" alt="node"></img>
                        <img src={mongodb} className="techImg" alt="mongodb"></img>

                        <img className="projectImg" src={Plantify} alt="Plantify App">
                        </img>

                        <a onClick={open_plantify}>
                        <span>
                        <p className="projectInfo"><bold>PLANTIFY</bold><br/>Identify plants using your phones camera, add plants to your garden, and mange your plants feeding and watering schedule.</p>
                        </span>
                        </a>
                    </div>
                </div>


{/* Jam Sesh */}
                <div className="plantifyOverlay">
                    <div className="projectContainer">
                    <img src={javascript} className="techImg" alt="javascript"></img>
                    <img src={jquery} className="techImg" alt="jQuery"></img>
                    <img src={json} className="techImg" alt="json"></img>
                    <img src={api} className="techImg" alt="api"></img>
                    <img src={node} className="techImg" alt="node"></img>
                    
                    <a onClick={open_jam}>
                    <span><p className="projectInfo"><bold>JAM SESH</bold><br/>Find musicians to join your band or fill a position for a last minute gig. Use the map to easily find musicians in your area and their favorite instrument.</p></span></a>
                    <img className="projectImg" src={Jamsesh} alt="Jamsesh App"></img>
                    </div>
                </div>


                <div></div>
                <div></div>

{/* RPG */}
                <div className="plantifyOverlay">
                <div className="projectContainer">

                <a onClick={open_rpg}>
                <span><p className="projectInfo"><bold>RPG</bold><br/>Can you survive this gauntlet? Choose a hero and battle the reamining characters.</p></span></a>

                    <img src={javascript} className="techImg" alt="javascript"></img>
                    <img src={jquery} className="techImg" alt="jquery"></img>
                    <img src={css} className="techImg" alt="css"></img>
                    <img src={cssgrid} className="techImg" alt="cssgrid"></img>
                    <img className="projectImg" src={RPG} alt="RPG App"></img>
                    </div>
                </div>

{/* Train Scheduler */}
                <div className="plantifyOverlay">
                <div className="projectContainer">

                <a onClick={open_train}>
                <span><p className="projectInfo"><bold>TRAIN SCHEDULE</bold><br/>Never miss a train again! Add custom trains, and automatically calculate their arrival times. This app uses Moment.js.</p></span></a>

                    <img src={api} className="techImg" alt="api"></img>
                    <img src={ajax} className="techImg" alt="ajax"></img>
                    <img src={json} className="techImg" alt="json"></img>
                    <img src={firebase} className="techImg" alt="firebase"></img>
                    <img src={bootstrap} className="techImg" alt="bootstrap"></img>
                    <img className="projectImg" src={Train} alt="Train App"></img>
                    </div>
                </div>


                <div></div>
                <div></div>

{/* Memory Game */}
                <div className="plantifyOverlay">
                <div className="projectContainer">
                <a onClick={open_memory}>
                <span><p className="projectInfo"><bold>MEMORY GAME</bold><br/>How good is your memory? Select all the images you have not already selected to try and beat this game.</p></span></a>
                    <img src={react} className="techImg" alt="react"></img>
                    <img src={bootstrap} className="techImg" alt="bootstrap"></img>
                    <img src={css} className="techImg" alt="css"></img>
                    <img className="projectImg" src={Memory} alt="Memory App"></img>
                    </div>
                </div>


{/* Work in Progress */}
                <div className="plantifyOverlay">
                <div className="projectContainer">
                <img src={react} style={invis} className="techImg spaceHolder" alt="react"></img>

                <a onClick={open_const}>
                <span><p className="projectInfo"><bold>WORK IN PROGRESS</bold><br/>My latest projects code will be here. These are not a complete projects but your more than welcome to see whats going on.</p></span>
                </a>
                    <img className="projectImg bottomImg" src={Construction} alt="coming soon"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;