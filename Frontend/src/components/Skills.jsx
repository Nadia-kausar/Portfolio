import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGitAlt,
  FaWordpress,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiDjango,
  SiBootstrap,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiJquery,
  SiVite,
  SiNpm,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <h2 className="skills-heading">My Skills</h2>

      <div className="skills-grid">
        {/* Frontend Skills */}
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li><FaHtml5 className="icon" /> HTML5</li>
            <li><FaCss3Alt className="icon" /> CSS3</li>
            <li><FaJs className="icon" /> JavaScript (ES6+)</li>
            <li><SiBootstrap className="icon" /> Bootstrap</li>
            <li><SiTailwindcss className="icon" /> Tailwind CSS</li>
            <li><FaReact className="icon" /> React.js (Hooks, Context, React Router)</li>
            <li><SiJquery className="icon" /> jQuery</li>
            <li><FaFigma className="icon" /> Figma (UI/UX design, prototyping)</li>
            <li>Cross-browser compatibility & performance optimization</li>
            <li>Mobile-first & responsive design</li>
            <li>Accessibility (WCAG basics)</li>
          </ul>
        </div>

        {/* Backend & Tools */}
        <div className="skill-category">
          <h3>Backend & Tools</h3>
          <ul>
            <li><SiDjango className="icon" /> Django (REST, templating)</li>
            <li><FaNodeJs className="icon" /> Node.js</li>
            <li><SiExpress className="icon" /> Express.js</li>
            <li><SiMongodb className="icon" /> MongoDB / Mongoose</li>
            <li><SiPostgresql className="icon" /> PostgreSQL</li>
            <li><SiMysql className="icon" /> MySQL</li>
            <li><FaPython className="icon" /> Python (backend scripts)</li>
            <li>RESTful APIs & AJAX / Axios</li>
            <li><FaWordpress className="icon" /> WordPress</li>
            <li><FaGitAlt className="icon" /> Git & GitHub</li>
            <li><SiVite className="icon" /> Vite</li>
            <li><SiNpm className="icon" /> npm</li>
          </ul>
        </div>

        {/* Professional & Soft Skills */}
        <div className="skill-category">
          <h3>Professional / Soft Skills</h3>
          <ul>
            <li>Critical thinking</li>
            <li>Problem solving & debugging</li>
            <li>UI/UX empathy & user-centered design</li>
            <li>Communication & teamwork</li>
            <li>Client interaction & problem understanding</li>
            <li>Team collaboration</li>
            <li>Ability to lead and work as a leader</li>
            <li>Adaptability & quick learning</li>
            <li>Time management & task prioritization</li>
            <li>Project planning & documentation</li>
            <li>Agile / Scrum workflow understanding</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
