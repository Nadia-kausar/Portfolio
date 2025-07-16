import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const scroll = () => {
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 500);
    } else {
      scroll();
    }

    setMenuOpen(false);
  };

  const sections = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Portfolio" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection("home")}>
          NadiaDev
        </div>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
        >
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button className="nav-btn" onClick={() => scrollToSection(id)}>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
