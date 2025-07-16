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
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <h2 className="skills-heading">My Skills</h2>

      <div className="skills-grid">
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li><FaHtml5 className="icon" /> HTML5</li>
            <li><FaCss3Alt className="icon" /> CSS3</li>
            <li><FaJs className="icon" /> JavaScript (ES6+)</li>
            <li><FaReact className="icon" /> React</li>
            <li><FaFigma className="icon" /> Figma (UI/UX)</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Backend & Tools</h3>
          <ul>
            <li><FaNodeJs className="icon" /> Node.js</li>
            <li><SiExpress className="icon" /> Express.js</li>
            <li><SiMongodb className="icon" /> MongoDB</li>
            <li>RESTful APIs</li>
            <li><FaWordpress className="icon" /> WordPress</li>
            <li><FaGitAlt className="icon" /> Git & GitHub</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Professional Skills</h3>
          <ul>
            <li>Better Communication Skills</li>
            <li>Client Interaction & Problem Understanding</li>
            <li>Team Collaboration</li>
            <li>Ability to Lead and Work as a Leader</li>
            <li>Adaptability & Quick Learning</li>
            <li>Time Management</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
