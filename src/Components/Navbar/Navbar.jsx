import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";


const Navbar = ({ onOpenModal }) => {
  



  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ENG");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectLanguage = (lang) => {
    setSelectedLang(lang);
    setDropdownOpen(false);
  };

  const languages = ["ENG", "FRE", "EWE", "TWI"];

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a nav item is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toogleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />} {/* Change icon dynamically */}
      </div>

      <div className="logo">
        <h1>Croply</h1>
      </div>

      <ul className={isOpen ? "navbar-menu active open" : "navbar-menu"}>
        <a
          href="#home"
          onClick={() => {
            setMenu("home");
            closeMenu();
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </a>

        <a
          href="#about"
          onClick={() => {
            setMenu("about");
            closeMenu()
          }}
          className={menu === "about" ? "active" : ""}
        >
          About
        </a>

        <a
          href="#marketplace"
          onClick={() => {
            setMenu("marketplace");
            closeMenu()
          }}
          className={menu === "marketplace" ? "active" : ""}
        >
          Marketplace
        </a>

        <a
          href="#blog"
          onClick={() => {
            setMenu("blog");
            closeMenu()
          }}
          className={menu === "blog" ? "active" : ""}
        >
          Blog
        </a>

        <a
          href="#contact"
          onClick={() => {
            setMenu("contact");
            closeMenu()
          }}
          className={menu === "contact" ? "active" : ""}
        >
          Contact
        </a>
      </ul>

      <div className="navbar-cta">
        <div className="lang-selector">
          <button onClick={toggleDropdown} className="lang-btn">
            {selectedLang} <span className="arrow">▼</span>
          </button>

          {dropdownOpen && (
            <ul className="lang-dropdown">
              {languages.map((lang) => (
                <li key={lang} onClick={() => selectLanguage(lang)}>
                  {lang}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button className="sign-up" onClick={onOpenModal}>Sign up</button>
      </div>

    </div>
  );
};

export default Navbar;
