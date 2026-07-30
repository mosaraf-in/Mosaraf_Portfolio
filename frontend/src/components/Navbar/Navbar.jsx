
import { useEffect, useState } from "react";

import { FaBars, FaXmark } from "react-icons/fa6";

import logo from "../../assets/images/logo2.png";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const handleNavClick = (section) => {
  setActiveSection(section);
  setMenuOpen(false);
};

  return (
    <header className="header_wrapper">
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          scrolled ? "header-scrolled" : ""
        }`}
      >
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#home">
            <img src={logo} className="img-fluid" alt="logo" />
          </a>

          {/* Mobile Toggle */}

          <button
            className="navbar-toggler border-0"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaXmark size={26} /> : <FaBars size={24} />}
          </button>

          {/* Menu */}

          <div
            className={`collapse navbar-collapse justify-content-end ${
              menuOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav menu-navbar-nav">
              <li className="nav-item">
                <a
                  className={`nav-link ${
  activeSection === "home" ? "active" : ""
}`}
href="#home"
onClick={() => handleNavClick("home")}
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${
  activeSection === "about" ? "active" : ""
}`}
href="#about"
onClick={() => handleNavClick("about")}
                >
                  About
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${
  activeSection === "skills" ? "active" : ""
}`}
href="#skills"
onClick={() => handleNavClick("skills")}
                >
                  Skills
                </a>
              </li>

              {/* <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "rgb(138,134,134)" }}
                  onClick={closeMenu}
                >
                  <del>Services</del>
                </a>
              </li> */}

              <li className="nav-item">
                <a
                  className={`nav-link ${
  activeSection === "projects" ? "active" : ""
}`}
href="#projects"
onClick={() => handleNavClick("projects")}
                >
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${
  activeSection === "contact" ? "active" : ""
}`}
href="#contact"
onClick={() => handleNavClick("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;