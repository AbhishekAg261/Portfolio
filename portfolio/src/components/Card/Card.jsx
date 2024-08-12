import React from "react";
import "./Card.css";
import { motion } from "framer-motion";

const Card = ({ item }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ x: -100, opacity: 0 }}
      transition={{ duration: 1, delay: 0 }}
      whileHover={{
        translateY: -10,
        boxShadow: "0 0px 20px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.2 },
      }}
      className="card"
    >
      <div className="top">
        <img src={item.img} className="image" alt="School Logo" />
        <div className="body">
          <div className="name">{item.school}</div>
          <div className="degree">{item.degree}</div>
          <div className="date">{item.date}</div>
        </div>
      </div>
      <div className="grade">
        <b>Grade: </b>
        {item.grade}
      </div>
      <div className="description">
        <span>{item.desc}</span>
      </div>
      <div className="border-line"></div>
    </motion.div>
  );
};

export default Card;
