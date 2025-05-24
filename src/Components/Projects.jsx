import React, { useRef } from "react";
import "./Styles/projects.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import projectimage1 from "../Assets/Aptech_Appliaction_Screens.png";
import projectimage2 from "../Assets/Car_Website.png";
import projectimage3 from "../Assets/MyPortfolio.png";
import projectimage4 from "../Assets/quote.png";
import projectimage5 from "../Assets/DigiLawyer-1.png";

function Projects() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const cardWidth = window.innerWidth <= 768 ? 260 : 300; // Card width + gap
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const projects = [
    {
      id: 1,
      image: projectimage1,
      title: "Aptech Application",
      description:
        "A modern Flutter-based app with Firebase Authentication for secure login...",
      Link: "https://github.com/Mr-UsmanKhalid/Aptech-Application-Project",
    },
    {
      id: 2,
      image: projectimage2,
      title: "Web Design Demo",
      description:
        "Excited to showcase my latest front-end web design for Pak Motor...",
      Link: "https://github.com/Mr-UsmanKhalid/Car-front-end-Web-Design",
    },
    {
      id: 3,
      image: projectimage3,
      title: "Personal Portfolio",
      description:
        "I create modern, responsive, and high-performance applications using React...",
      Link: "https://github.com/Mr-UsmanKhalid/Responsive-Portfolio-With-React",
    },
    {
      id: 4,
      image: projectimage4,
      title: "Random Quote App",
      description:
        "Built a Random Quote Generator using API integration...",
      Link: "https://github.com/Mr-UsmanKhalid/Random-Quote-App",
    },
    {
      id: 5,
      image: projectimage5,
      title: "DigiLawyer",
      description:
        "DigiLawyer is a legal website that provides legal services to users...",
      Link: "https://github.com/Mr-UsmanKhalid/DigiLawyer", 
    },
  ];

  return (
    <div className="Project-container">
      <h1 className="Project-heading">Projects</h1>

      <div className="carousel-wrapper">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          <FaChevronLeft />
        </button>

        <div className="Project-grid" ref={scrollRef}>
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
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Projects;