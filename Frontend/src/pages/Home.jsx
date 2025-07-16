import React from "react";
import "./Home.css";
import n1 from "../assets/n1.jpg";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import BlogSection from "../components/BlogSection";
import Contact from "../components/Contact";

const Home = () => (
  <main className="homepage" id="home">
    <div className="container">
      {/* Intro Section */}
      <section className="intro-section" id="intro">
        <div className="intro-left">
          <h1>
            Hi, I’m <span className="highlight">Nadia Kausar</span>
          </h1>
          <h2>Full Stack Web Developer 💻</h2>
          <p>
            I specialize in building full-stack web applications using modern technologies like <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>. I have a strong eye for design, and I'm passionate about crafting responsive UIs and seamless user experiences.
          </p>
          <p>
            With hands-on experience in <strong>RESTful APIs</strong>, <strong>version control (Git & GitHub)</strong>, and <strong>responsive design frameworks</strong> like <strong>Bootstrap</strong> and <strong>Tailwind CSS</strong>, I deliver projects that are scalable, maintainable, and performance-optimized.
          </p>
          <a href="#contact" className="btn-primary">Get In Touch</a>
        </div>
        <div className="intro-right">
          <img src={n1} alt="Nadia Kausar" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <Skills />
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section" id="portfolio">
        <Portfolio />
      </section>

      {/* Blog Section */}
      <section className="blog-section" id="blog">
        <BlogSection />
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <Contact />
      </section>
    </div>
  </main>
);

export default Home;
