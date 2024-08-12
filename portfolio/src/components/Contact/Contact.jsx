import React from "react";
import "./Contact.css";
import { Bio } from "../../data/constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-inner-container">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="contact-title"
        >
          Contact
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="contact-desc"
        >
          Feel free to reach out to me for any questions or opportunities!
        </motion.div>
        <motion.form
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          action="https://formspree.io/f/xwpeekga"
          className="contact-form"
          method="POST"
        >
          <div className="contact-form-title">Email Me 🚀</div>
          <input
            className="contact-input"
            placeholder="Enter Your Email"
            name="email"
            required
          />
          <input
            className="contact-input"
            placeholder="Enter Your Name"
            name="username"
            required
          />
          <input
            className="contact-input"
            placeholder="Subject"
            name="subject"
            required
          />
          <textarea
            className="contact-input-message"
            placeholder="Message"
            rows="4"
            name="message"
            required
          />
          <input className="contact-button" type="submit" value="send" />
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
