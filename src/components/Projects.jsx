
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Online Banking System",
      description:
        "Banking application with deposit, withdraw, transfer and transaction history.",
      github:
        "https://github.com/anandkishoretata-ak/Online-Banking-System.git",
    },
    
    {
      title: "Quiz Application",
      description:
        "Quiz of programming language like java,python etc.",
      github:
        "https://github.com/anandkishoretata-ak/Quiz-Application.git",
    },
    {
      title: "MedTrack",
      description:
        "AWS-based healthcare management system.",
      github:
        "https://github.com/anandkishoretata-ak/medtrack.git",
    },
    {
      title:"Placement Management System",
      description:
      "The students placements details",
      github:
      "https://github.com/anandkishoretata-ak/Placement-Management-System.git",

    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <span className="view-project">
              🚀 View Project →
            </span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;