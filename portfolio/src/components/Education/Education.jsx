import React from "react";
import "./Education.css";
import { education } from "../../data/constants";
import Card from "../Card/Card";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="education-container" id="education">
      <div className="education-inner-container">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="title"
        >
          Education
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="desc"
        >
          My education has been a journey of self-discovery and growth. My
          education details are as follows:
        </motion.div>
        {education.map((item, index) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Education;
