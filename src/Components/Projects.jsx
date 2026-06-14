import React, { useRef } from "react";
import "./Styles/projects.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import projectimage0 from "../Assets/Personal_AI_Chat_Assistant.png";
import projectimage1 from "../Assets/Aptech_Appliaction_Screens.png";
import projectimage2 from "../Assets/Car_Website.png";
import projectimage3 from "../Assets/MyPortfolio.png";
import projectimage4 from "../Assets/quote.png";
import projectimage5 from "../Assets/DigiLawyer-1.png";
import projectimage6 from "../Assets/Aura_Watches.png";
import projectimage7 from "../Assets/N8N_video_work_flow.png";
import projectimage10 from "../Assets/Auto-ReplyBot.png";
import carbreezy from "../Assets/car-breezy.png";
import yzshopImage from "../Assets/yZ.png"

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
      id: 0,
      image: projectimage10,
      title: "AI Powered Facebook Auto-Reply Bot",
      description:
        "Built an AI-powered Facebook Auto-Reply Bot for automated Messenger and comment replies in real time.",
      tools: ["Python","GROQ Model","Meta API","AI Automation"],
      Link: "https://github.com/Mr-UsmanKhalid/Auto-Reply-Agent-FB",
    },

    {
      id: 1,
      image: projectimage0,
      title: "Personal AI Chat Assistant",
      description:
        "Create a Chat AI Assistant using LangChain with Python, LLMs, and Groq.",
      tools: ["Python","LangChain","Groq","Streamlit"],
      Link: "https://mr-usmankhalid-ai-chat-assistant.streamlit.app/",
    },

    {
      id: 2,
      image: projectimage7,
      title: "Avatar Video Generator & YouTube Uploader",
      description:
        "Avatar Video Generator & YouTube Uploader using n8n workflows.",
      tools: ["n8n","AI Automation","YouTube API", "HeyGen"],
      Link: "https://github.com/Mr-UsmanKhalid/N8N_Avatar_Video_Generator",
    },

    {
      id: 3,
      image: projectimage1,
      title: "Aptech Application",
      description:
        "A modern Flutter-based app with Firebase Authentication for secure login and user management.",
      tools: ["Flutter", "Firebase", "Dart"],
      Link: "https://github.com/Mr-UsmanKhalid/Aptech-Application-Project",
    },

    {
      id: 10,
      image: yzshopImage,
      title: "Yz Shop E-commerce",
      year: "2025",
      description:
        "A complete MERN Stack E-commerce website for laptops, mobiles, and accessories. Includes both admin and user dashboards.",
      tools: [
        "MERN STACK",
        "JWT",
        "REST API",
        "Bootstrap 5"
      ],
      Link: "https://github.com/UsmanKhalid7117/YzShop"
    },

    {
      id: 4,
      image: carbreezy,
      title: "Car Breezy Web App",
      description:
        "Modern car marketplace web app with responsive UI, animated slider, smooth navigation, and advanced vehicle search.",
      tools: ["JavaScript", "Bootstrap 5", "CSS3", "HTML5"],
      Link: "https://github.com/Mr-UsmanKhalid/Car-Breezy",
    },

    {
      id: 5,
      image: projectimage2,
      title: "Web Design Demo",
      description:
        "Excited to showcase my latest front-end web design for Pak Motor with a clean and modern user experience.",
      tools: ["JavaScript", "JQuery", "Bootstrap 5", "CSS3"],
      Link: "https://github.com/Mr-UsmanKhalid/Car-front-end-Web-Design",
    },

    {
      id: 6,
      image: projectimage3,
      title: "Personal Portfolio",
      description:
        "I create modern, responsive, and high-performance applications using React and modern web technologies.",
      tools: ["React JS", "JavaScript", "CSS3"],
      Link: "https://github.com/Mr-UsmanKhalid/Responsive-Portfolio-With-React",
    },

    {
      id: 7,
      image: projectimage4,
      title: "Random Quote App",
      description:
        "Built a Random Quote Generator using API integration with responsive UI and dynamic content updates.",
      tools: ["React JS", "REST API", "JavaScript"],
      Link: "https://github.com/Mr-UsmanKhalid/Random-Quote-App",
    },

    {
      id: 8,
      image: projectimage5,
      title: "DigiLawyer",
      description:
        "DigiLawyer is a legal website that provides legal services to users through a modern and accessible interface.",
      tools: ["React JS", "Bootstrap", "CSS3"],
      Link: "https://github.com/Mr-UsmanKhalid/Digilawyer-Landing-Page",
    },

    {
      id: 9,
      image: projectimage6,
      title: "Aura Watch E-Commerce",
      description:
        "An e-commerce platform for luxury watches featuring a premium shopping experience.",
      tools: ["JavaScript", "HTML5", "CSS3"],
      Link: "https://aura-watches.vercel.app/",
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
                <div className="tools">
                  {project.tools?.map((tool, index) => (
                    <span key={index} className="tool-badge">
                      {tool}
                    </span>
                  ))}
                </div>
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