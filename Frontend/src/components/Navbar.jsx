import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
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
        <div
          className="navbar-logo"
          onClick={() => scrollToSection("home")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && scrollToSection("home")}
        >
          NadiaDev
        </div>

        <ul className="nav-links">
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
