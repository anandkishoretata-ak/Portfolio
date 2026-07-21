import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">HTML</div>
        <div className="skill-card">CSS</div>
        <div className="skill-card">JavaScript</div>
        <div className="skill-card">React</div>
        <div className="skill-card">Node.js</div>
        <div className="skill-card">MongoDB</div>
      </div>
    </motion.section>
  );
}

export default Skills;