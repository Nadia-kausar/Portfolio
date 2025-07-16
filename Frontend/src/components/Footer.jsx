import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3 className="footer-title">Nadia Kausar</h3>
          <p className="footer-role">Full Stack Web Developer</p>
        </div>

        <ul className="footer-links">
          <li>
            <a href="mailto:kausarnadia32@gmail.com" target="_blank" rel="noreferrer">
              <Mail className="footer-icon" /> Email
            </a>
          </li>
          <li>
            <a href="https://github.com/Nadia-kausar" target="_blank" rel="noreferrer">
              <Github className="footer-icon" /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nadia-kausar-364a2a31b"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="footer-icon" /> LinkedIn
            </a>
          </li>
        </ul>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Nadia Kausar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
