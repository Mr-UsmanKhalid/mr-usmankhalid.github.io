import React from "react";
import "./Styles/About.css";
import profileImage from "../Assets/ABOUT.jpg"; // Import your profile image

const About = () => {

  const myEmail = 'usmanq0139@gmail.com'; 
  const subject = 'Hire Me';
  const body = '';
  
  const handleHireMeClick = (event) => {
    event.preventDefault();
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(myEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, '_blank');
  };
  

  return (
    <div class="about-wrapper">
    <div className="about-container">
      <div className="about-image">
        <img src={profileImage} alt="Profile" />
        <div className="image-border"></div>
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p> Hi, I'm Usman Khalid, a software engineer with a degree from Aptech Learning Computer Education, verified by Middlesex University.Skilled in Front End Development with React. Experienced in building personal projects. Familiar with Flutter, PHP, Laravel, and MySQL. Dedicated software engineer with a strong foundation in programming languages and a passion for building innovative projects.</p>
        
        
        <div className="about-buttons">
          <a className="hire-me" onClick={handleHireMeClick} >Hire Me</a>
          <a  href="https://drive.google.com/file/d/1kbHJ_E9qVGZUEbeNs9v4UT2FFNFg5BxS/view?usp=sharing" target="blank" className="download-cv">Download CV</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
