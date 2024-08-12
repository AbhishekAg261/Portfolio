import React from "react";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="hero-container" id="about">
        <div className="hero-inner-container">
          <div className="hero-left-container" id="Left">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="hero-title"
            >
              Hi, I am <br /> {Bio.name}
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hero-text-loop"
            >
              I am a
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="hero-span"
              >
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="hero-sub-title"
            >
              {Bio.description}
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
              className="hero-resume-button-wrapper" // Add a wrapper div
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "20px 20px 60px #1f2634",
                  filter: "brightness(1)",
                }}
                className="hero-resume-button"
                href={Bio.resume}
              >
                Check Resume
              </motion.a>
            </motion.div>
          </div>
          <div className="hero-right-container" id="Right">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="hero-img"
              src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
              alt="hero-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
