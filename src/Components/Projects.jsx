import React from "react";
import "./Styles/projects.css";
import projectimage1 from "../Assets/Aptech_Appliaction_Screens.png";
import projectimage2 from "../Assets/Car_Website.png";
import projectimage3 from "../Assets/MyPortfolio.png";
import projectimage4 from "../Assets/quote.png";

function Project() {
  const projects = [
    {
      id: 1,
      image: projectimage1,
      title: "Aptech Application",
      description: "A modern Flutter-based app with Firebase Authentication for secure login. It features a user-friendly UI with course listings, student dashboard, and easy navigation for IT learners.",
      Link: "https://github.com/Mr-UsmanKhalid/Aptech-Application-Project"
    },
    {
      id: 2,
      image: projectimage2,
      title: "Web Design Demo",
      description: "🚗💻 Excited to showcase my latest front-end web design for Pak Motor! From sleek car displays to user-friendly service options, this design aims to provide a seamless experience for automobile enthusiasts. 🚙✨",
      Link: "https://github.com/Mr-UsmanKhalid/Car-front-end-Web-Design"
    },
    {
      id: 3,
      image: projectimage3,
      title: "Personal Portfolio",
      description: "I create modern, responsive, and high-performance applications using React. Passionate about delivering seamless user experiences with clean UI/UX and efficient functionality.",
      Link: "https://github.com/Mr-UsmanKhalid/Responsive-Portfolio-With-React"
    },
    {
      id: 4,
      image: projectimage4,
      title: "Random Quote App",
      description: "Built a Random Quote Generator using API integration,Fetched quotes via GET requests,React-based UI with dynamic rendering.",
      Link: "https://github.com/Mr-UsmanKhalid/Random-Quote-App"
    },
  ];
  return (
    <div className="Project-container">
      <h1 className="Project-heading">Projects</h1>
      <div className="Project-grid">
          {projects.map((project) => (
            <div key={project.id} className="card">
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-content">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
              <div className="Visit_btn">
                <a href={project.Link} target="_blank" rel="noopener noreferrer">
                   View Project {/* <i class='bx bx-chevron-right' style='color:#0a3773'  ></i> */}
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Project;
