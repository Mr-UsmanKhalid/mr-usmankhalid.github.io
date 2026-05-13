import React, { useState } from "react";
import "./Styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      category: "Front End Development",
      projects: [
        {
          title: "Aura Watches",
          year: "2023",
          description:
            "Aura Watches is an E-commerce website built with HTML, CSS, JS, jQuery, and Bootstrap 5. It features a clean, modern layout and is fully responsive across all devices.",
          visit: "https://aura-watches.vercel.app/",
        },
        {
          title: "Digilawyer",
          year: "2025",
          description:
            "Digilawyer is a responsive landing page built with React + Vite. It uses Tailwind CSS and Material UI for styling, and features a smooth scrollable navbar.",
          visit: "https://digilawyer-three.vercel.app/",
        },
        {
          title: "Random Quote Generator",
          year: "2025",
          description:
            "This app generates random quotes using a JSON API. Built with React, it’s a lightweight and interactive way to explore inspiring quotes.",
          visit: "https://randomquoteapp-tan.vercel.app/",
        },
        {
          title: "Personal Portfolio",
          year: "2025",
          description:
            "A responsive React-based personal portfolio featuring a scrollable navbar and external CSS styling. Built to showcase my projects and skills effectively.",
          visit: "https://randomquoteapp-tan.vercel.app/",
        },
      ],
    },
    {
      category: "Full Stack Development",
      projects: [
        {
          title: "Yz Shop E-commerce",
          year: "2025",
          description:
            "A complete MERN Stack E-commerce website for laptops, mobiles, and accessories. Includes both admin and user dashboards with responsive design.",
          visit: "https://yz-shop.vercel.app/",
        },
      ],
    },
        {
      category: "Application Development",
      projects: [
        {
          title: "Aptech Education App",
          year: "2024",
          description:
            "Designed and developed the front-end of a course management application using Flutter, focusing on modern and responsive UI/UX.Integrated Firebase Authentication to enable secure and seamless user login and registration.",
          visit: "https://github.com/Mr-UsmanKhalid/Aptech-Application-Project",
        },
      ],
    },
    {
      category: "Generative AI & N8N Automation",
      projects: [
        {
          title: "AI Powered Facebook Auto-Reply Bot",
          year: "2026",
          description: `Built an AI-powered Facebook Auto-Reply Bot using Python, Flask, and Facebook Graph API.
          The bot automatically replies to Messenger messages, detects comments, and sends instant DMs using keyword matching and AI responses.
          Integrated Groq AI, Google Sheets, and deployed the project on Vercel for real-time automation.
`,
          visit:
            "https://github.com/Mr-UsmanKhalid/Auto-Reply-Agent-FB",
        },
        {
          title: "Personal AI Chat Assistant",
          year: "2025",
          description: `An AI Chat Assistant using LangChain, Python, and Groq.
🧠 Retrieves answers from my personal documents (RAG with Pinecone)
🧮 Solves math problems via a custom calculator tool
🌐 Performs real-time web scraping using Firecrawl and chunking.`,
          visit:
            "https://mr-usmankhalid-ai-chat-assistant.streamlit.app/",
        },
        {
          title: "🧠 Avatar Video Generator & YouTube Uploader (N8N)",
          year: "2025",
          description: `An N8N workflow that creates AI avatar videos using the HeyGen API and uploads them automatically to YouTube.
🚀 Uses OpenRouter (DeepSeek) for script generation, Deepgram TTS for audio, and integrates with Google Sheets for metadata.`,
          visit:
            "https://github.com/Mr-UsmanKhalid/N8N_Avatar_Video_Generator",
        },
      ],
    },
  ];

  const [categoryIndex, setCategoryIndex] = useState(0);

  const currentCategory = experiences[categoryIndex];

  const handleNext = () => {
    setCategoryIndex((prev) => (prev + 1) % experiences.length);
  };

  const handlePrev = () => {
    setCategoryIndex(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
  };

  return (
    <div className="experience-section">
      <div className="experience-container">
        <h2 className="category">{currentCategory.category}</h2>

        <div className="projects-list">
          {currentCategory.projects.map((project, index) => (
            <div className="experience-card" key={index}>
              <div className="title-row">
                <h3>{project.title}</h3>
                <span className="year">{project.year}</span>
              </div>
              <p className="description">{project.description}</p>
              <a href={project.visit} target="_blank" rel="noreferrer">
                Visit: {project.visit}
              </a>
            </div>
          ))}
        </div>

        <div className="navigation">
          <button onClick={handlePrev} className="nav-btn left">
            &lt;
          </button>
          <button onClick={handleNext} className="nav-btn right">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
