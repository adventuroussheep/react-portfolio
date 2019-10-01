import React from "react";
import "./about.css";


import profilePic from "../../Assests/Images/profile-pic-resize.jpg";

import phone from "../../Assests/Images/Icons/phone.png";
import email from "../../Assests/Images/Icons/email.png";
import linkedin from "../../Assests/Images/Icons/linkedin.png";
import github from "../../Assests/Images/Icons/github.png";


class AboutPage extends React.Component {

  phoneFunc(){
    // document.location.href = "tel:7153162544";
    window.open("tel:7153162544");
  }

  linkedInFunc(){
    window.open("https://www.linkedin.com/in/jacob-haas-909b05172");
  }

  gitHubFunc(){
    window.open("https://github.com/adventuroussheep");
  }

  render() {
    return (
      <div id="aboutWrapper">
        <div id="aboutWrapperAnimation">
          <div id="aboutTitle">
            <img id="profilePic" src={profilePic} alt="profile" />
          </div>
          <div id="contactBody">
            <div id="contactBodyInner">
 

              <div id="contactPhone">
              {/* <a href="callto:1-715-316-2544"> */}
              <a href="tel:1-715-316-2544">
                <img
                  className="linkHover"
                  src={phone}
                  alt="phone"
                />
                </a>
                {/* <p>715-316-2544</p> */}
              </div>

              <div id="contactEmail" className="hvr-float-shadow" >
                {/* <br> */}
                <a href={"mailto:" + "jacob_haas@live.com"}>
                <img
                  className="linkHover"
                  id="emailImg"
                  src={email}
                  alt="email"
                  onClick={this.emailFunc}
                  // href="mailto:jacob_haas@live.com" target="_top"
                />
                {/* <p style="user-select:all">jacob@jhaas.dev</p> */}
                </a>
              </div>


{/* LinkedIn */}
              <div id="contactLinkedin">
                {/* <br> */}
                <a onClick={this.linkedInFunc}>
                <img
                  className="linkHover"
                  id="linkedinUrl"
                  src={linkedin}
                  alt="linkedin"
                  />
                  </a>
              </div>

{/* GitHub */}
              <div id="contactGithub">
              <a onClick={this.gitHubFunc}>
                <img
                  className="linkHover"
                  id="githubUrl"
                  src={github}
                  alt="github"
                />
                </a>
                {/* <p style="user-select:all">https://github.com/adventuroussheep</p> */}
              </div>
            </div>
          </div>
          <div className="aboutText">
            <p>
            My name is Jacob, I am a full stack web developer with a MERN stack certification from UC-Berkeley’s coding bootcamp and specialize in front-end web development. I enjoy working with front-end libraries like CSS, SASS, and JavaScript to create well-organized and immersive websites. Growing up in rural Wisconsin I spent much of my time online or exploring the forests. By the time I was a Freshman in high school I created my school’s website and was presented with a “WebMaster” award for my work. I went on to create small websites for family members and continued learning about website design and networking when I moved to Colorado the following year. This move allowed me to follow my passion for exploration which eventually led me to get my Geology degree from the University of Wisconsin.
            </p>
            <br />
            <p>
            Having spent countless hours over a microscope I am very detail-oriented. I enjoy applying that attention to detail when creating websites. Having presented research findings to a wide variety of audiences I am good and taking complex ideas and explaining them to people unfamiliar with the subject. I hope to bring my attention to detail, out of the box thinking, and hard work ethic to your companies next project.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
