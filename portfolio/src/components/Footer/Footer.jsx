import React from "react";
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { TfiLinkedin } from "react-icons/tfi";
import { FiInstagram } from "react-icons/fi";
import { Bio } from "../../data/constants";
import "./Footer.css";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer-inner-container">
        <h1 className="footer-logo">Abhishek Kumar Agrawal</h1>
        <nav className="footer-nav">
          <Link className="footer-nav-link" to="#about">
            About
          </Link>
          <Link className="footer-nav-link" to="#skills">
            Skills
          </Link>
          <Link className="footer-nav-link" to="#experience">
            Experience
          </Link>
          <Link className="footer-nav-link" to="#projects">
            Projects
          </Link>
          <Link className="footer-nav-link" to="#education">
            Education
          </Link>
        </nav>
        <div className="footer-social-media-icons">
          <a
            className="footer-social-media-icon"
            href={Bio.facebook}
            target="display"
          >
            <CiFacebook />
          </a>
          <a
            className="footer-social-media-icon"
            href={Bio.twitter}
            target="display"
          >
            <RiTwitterXLine />
          </a>
          <a
            className="footer-social-media-icon"
            href={Bio.linkedin}
            target="display"
          >
            <TfiLinkedin />
          </a>
          <a
            className="footer-social-media-icon"
            href={Bio.insta}
            target="display"
          >
            <FiInstagram />
          </a>
        </div>
        <p className="footer-copyright">
          &copy; 2024 Abhi_01. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
