import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Contact Me</h2>

      <div className="contact-container">
        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>anandkishoretata@gmail.com</p>
        </motion.div>

        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaPhone className="contact-icon" />
          <h3>Phone</h3>
          <p>+91 8125792099</p>
        </motion.div>

        <motion.a
          href="https://www.linkedin.com/in/anandkishore12"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <p>Visit Profile</p>
        </motion.a>

        <motion.a
          href="https://github.com/anandkishoretata-ak"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <p>Visit GitHub</p>
        </motion.a>
      </div>
    </motion.section>
  );
}

export default Contact;