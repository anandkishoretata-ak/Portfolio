import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image */}
        <img
          src={`${import.meta.env.BASE_URL}anand.jpg`}
          alt="Tata Anand Kishore"
          className="profile-image"
        />

        {/* Name */}
        <h1 className="hero-name">
          Tata Anand Kishore
        </h1>

        {/* Typing Animation */}
        <TypeAnimation
          sequence={[
            "MERN Stack Developer",
            2000,
            "React Developer",
            2000,
            "Frontend Developer",
            2000,
            "Backend Developer",
            2000,
          ]}
          wrapper="h2"
          repeat={Infinity}
          className="typing-text"
        />

        <p>
          Building modern web applications with React,
          Node.js, Express.js and MongoDB.
        </p>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://github.com/anandkishoretata-ak"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/anandkishore12"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:anandkishoretata@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        {/* Resume Button */}
        <a
          href={`${import.meta.env.BASE_URL}Tata_Anand_Kishore_Resume.pdf`}
          download
          className="btn"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;