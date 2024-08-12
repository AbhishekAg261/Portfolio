import React, { useState } from "react";
import "./Navbar.css";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="nav"
        >
          <div className="navbar-container">
            <Link className="nav-logo" to="/">
              <div className="logo-container">
                <DiCssdeck size="3rem" />
                <div className="span">Portfolio</div>
              </div>
            </Link>

            <ul className="nav-items">
              <li>
                <Link className="nav-link" to="#about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="#skills">
                  Skills
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="#experience">
                  Experience
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="#projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="#education">
                  Education
                </Link>
              </li>
            </ul>
            <div className="button-container">
              <a
                className="github-button"
                to={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Profile
              </a>
            </div>
            <div className="mobile-icon">
              <FaBars onClick={() => setIsOpen(!isOpen)} />
            </div>
            {isOpen && (
              <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <Link
                  className="mobile-link"
                  to="#about"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  About
                </Link>
                <Link
                  className="mobile-link"
                  to="#skills"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Skills
                </Link>
                <Link
                  className="mobile-link"
                  to="#experience"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Experience
                </Link>
                <Link
                  className="mobile-link"
                  to="#projects"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Projects
                </Link>
                <Link
                  className="mobile-link"
                  to="#education"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Education
                </Link>
                <Link
                  className="github-button"
                  to={Bio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Profile
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
