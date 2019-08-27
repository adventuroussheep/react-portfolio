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


class Skills extends React.Component{
    render(){
        return(
            <div>


                <div className="frontEndWrapper">

                <h1>Front-End</h1>
                <div className="frontEnd">
                    
                    <div></div><div></div>
                    <img src={bootstrap} className="skillsImg" alt="bootstrap"></img>
                    <div></div><div></div>
                    
                    <div></div>
                    <img src={css} className="skillsImg" alt="css"></img>
                    <div></div>
                    <img src={cssgrid} className="skillsImg" alt="cssgrid"></img>
                    <div></div>

                    <img src={html} className="skillsImg" alt="html"></img>
                    <div></div>
                    <img src={javascript} className="skillsImg" alt="javascript"></img>
                    <div></div>
                    <img src={jquery} className="skillsImg" alt="jquery"></img>

                    <div></div>
                    <img src={materialui} className="skillsImg" alt="materialui"></img>
                    <div></div>
                    <img src={sass} className="skillsImg" alt="sass"></img>
                    <div></div>

                    <div></div><div></div>
                    <img src={react} className="skillsImg" alt="react"></img>
                </div>
                </div>



                <div className="backEndWrapper">
                <h1>Back-End</h1>
                <div className="backEnd">
                    <div></div>
                    <img src={ajax} className="skillsImg" alt="ajax"></img>
                    <div></div>

                    <img src={api} className="skillsImg" alt="api"></img>
                    <div></div>
                    <img src={json} className="skillsImg" alt="json"></img>

                    <div></div>
                    <img src={node} className="skillsImg" alt="node"></img>
                    <div></div>
                </div>
                </div>


                <div className="databaseWrapper">
                    <h1>Database</h1>
                    <div class="database">

                    <img src={mysql} className="skillsImg" alt="mysql"></img>
                    <div></div>
                    <img src={mongodb} className="skillsImg" alt="mongodb"></img>
                    
                    <div></div>
                    <img src={firebase} className="skillsImg" alt="firebase"></img>
                    <div></div>
                    </div>
                </div>




            </div>
        )
    }
}

export default Skills;