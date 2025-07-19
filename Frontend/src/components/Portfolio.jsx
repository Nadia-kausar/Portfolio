import React, { useState } from "react";
import "./Portfolio.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaPython,
  FaGitAlt, FaGithub, FaFigma
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiCplusplus } from 'react-icons/si';

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import fi1 from "../assets/fi1.png";
import fi2 from "../assets/fi2.png";
import fi3 from "../assets/fi3.png";
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';

const projects = [
  {
    title: "ShopEasy - MERN E-commerce",
    images: [p1, p2, p3, p4],
    description: "A full-stack e-commerce website like Daraz built using React, Node.js, Express & MongoDB. Features user authentication, product browsing, cart, reviews, and admin dashboard."
  },
  {
    title: "Food Website - Frontend",
    images: [f1, f2, f3],
    description: "A clean, responsive food delivery frontend designed with HTML, CSS, and JavaScript, showcasing menu, home, and contact pages."
  },
  {
    title: "Figma Mobile UI Design",
    images: [fi1, fi2, fi3],
    description: "A mobile-friendly UI/UX design project created in Figma. Focused on intuitive layout, accessibility, and visual consistency."
  }
];

const techIcons = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((index + 1) % projects.length);
  const handlePrev = () => setIndex((index - 1 + projects.length) % projects.length);
  const current = projects[index];

  return (
    <section className="portfolio-section">
      <h2 className="portfolio-heading">Portfolio</h2>
      <p className="portfolio-subheading">Here are some of my past experiences.</p>

      <div className="tabs">
        <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>Projects</button>
        <button className={activeTab === 'certificates' ? 'active' : ''} onClick={() => setActiveTab('certificates')}>Certificates</button>
        <button className={activeTab === 'techstack' ? 'active' : ''} onClick={() => setActiveTab('techstack')}>TechStack</button>
      </div>

      {/* Projects Tab */}
      {activeTab === 'projects' && (
        <div className="portfolio-content">
          <button className="nav-btn" onClick={handlePrev}><ChevronLeft /></button>

          <div className="project-card">
            <h3 className="project-title">{current.title}</h3>
            <div className={`image-grid ${index === 2 ? "figma-grid" : ""}`}>
              {current.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`project-${i}`}
                  className={`project-img ${index === 2 ? "figma-img" : ""}`}
                />
              ))}
            </div>
            <p className="project-description">{current.description}</p>
          </div>

          <button className="nav-btn" onClick={handleNext}><ChevronRight /></button>
        </div>
      )}

      {/* Certificates Tab */}
      {activeTab === 'certificates' && (
        <div className="certificates-grid">
          <div className="certificate-card">
            <img src={c2} alt="Certificate 2" />
          </div>
          <div className="certificate-card">
            <img src={c1} alt="Certificate 1" />
          </div>
        </div>
      )}

      {/* TechStack Tab */}
      {activeTab === 'techstack' && (
        <div className="portfolio-techstack">
          <div className="techstack-grid">
            {techIcons.map((tech, index) => (
              <div className="tech-card" key={index}>
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;