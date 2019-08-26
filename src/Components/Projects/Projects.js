import React from "react";
import "./projects.css";

import Plantify from "../../Assests/Images/plantify.JPG";
import Jamsesh from "../../Assests/Images/jamsesh.JPG";
import RPG from "../../Assests/Images/rpg.JPG";
import Train from "../../Assests/Images/train.JPG";
import Memory from "../../Assests/Images/memoryGame.JPG";

class Projects extends React.Component {
    render(){
        return(
            <div className="Wrapper">
                <div></div>
                        <div className="plantifyOverlay">
                    <div className="slider">
                        <img src={Plantify} alt="Plantify App"></img>
                        <span>Top</span>
                    </div>
                </div>
                <div className="plantifyOverlay">
                    <img src={Jamsesh} alt="Jamsesh App"></img>
                    <span>Top</span>
                </div>
                <div></div>
                <div></div>
                <div className="plantifyOverlay">
                    <img src={RPG} alt="RPG App"></img>
                    <span>Top</span>
                </div>
                <div className="plantifyOverlay">
                    <img src={Train} alt="Train App"></img>
                    <span>Top</span>
                </div>
                <div></div>
                <div></div>
                <div className="plantifyOverlay">
                    <img src={Memory} alt="Memory App"></img>
                    <span>Top</span>
                </div>
                <div className="plantifyOverlay">
                    <img src={Plantify} alt="Plantify App"></img>
                    <span>Top</span>
                </div>
            </div>
        )
    }
}

export default Projects;