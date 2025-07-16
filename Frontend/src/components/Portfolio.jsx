import React, { useState } from 'react';
import './Portfolio.css';
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaPython,
  FaGitAlt, FaGithub, FaFigma
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiCplusplus } from 'react-icons/si';

import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';

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
        <div className="portfolio-project-card">
          <h3>🛒 ShopEasy  Full Stack E-commerce Website</h3>
          <div className="project-images-grid">
            <img src={p1} alt="ShopEasy 1" />
            <img src={p2} alt="ShopEasy 2" />
            <img src={p3} alt="ShopEasy 3" />
            <img src={p4} alt="ShopEasy 4" />
          </div>
          <p className="project-description">
            ShopEasy is a full-featured MERN stack e-commerce platform developed with React.js, Node.js, Express, and MongoDB.
            The application supports secure authentication, product browsing, admin and user dashboards, cart and order management,
            and a review system. The frontend design is clean and responsive, closely following modern UX patterns similar to Daraz.
            This project demonstrates practical full-stack development and integration of REST APIs, MongoDB schemas, and role-based access.
          </p>
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
