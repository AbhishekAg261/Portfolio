import { PROJECTS } from "../../data/constants";
import "./Projects.css";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <div className="project-inner-container">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="project-heading"
        >
          Projects
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="project-intro"
        >
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </motion.div>
        <div>
          <div className="card-container">
            {PROJECTS.map((project, index) => (
              <div key={index} className="project-item">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ x: -100, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="project-img-container"
                >
                  <motion.img
                    whileHover={{
                      filter: "grayscale(0)",
                      scale: 1.1,
                    }}
                    src={project.img}
                    width={150}
                    height={150}
                    alt={project.title}
                    className="project-img"
                  />
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ x: 100, opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="project-details"
                >
                  <h6
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.2, cursor: "pointer" }}
                    className="project-title"
                  >
                    {project.title}
                  </h6>
                  <p className="project-description">{project.description}</p>
                  <div className="tect-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="project-tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
