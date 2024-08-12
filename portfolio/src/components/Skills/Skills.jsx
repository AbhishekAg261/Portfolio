import React from "react";
import "./Skills.css";
import { skills } from "../../data/constants";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="skill-container" id="skills">
      <div className="skill-inner-container">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="title"
        >
          Skills
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="desc"
        >
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </motion.div>
        <div className="skills-container">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1.5, delay: 0 }}
              whileHover={{
                translateY: -10,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
                transition: { duration: 0.2 },
              }}
              className="skill"
              key={skill.title}
            >
              <h2 className="skill-title">{skill.title}</h2>
              <div className="skill-list">
                {skill.skills.map((item) => (
                  <div className="skill-item" key={item.name}>
                    <img
                      className="skill-image"
                      src={item.image}
                      alt={item.name}
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
