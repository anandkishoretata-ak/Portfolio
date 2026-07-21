
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
       <img
       src="/anand.jpg"
       alt="Tata Anand Kishore"
       className="profile-image"
/>
       

        <h1>Tata Anand Kishore</h1>
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

        <a href="/Tata_Anand_Kishore_Resume.pdf" download className="btn">
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
import { motion } from "framer-motion";

<motion.img
  src="/anand.jpg"
  alt="Tata Anand Kishore"
  className="profile-image"
  animate={{
    y: [0, -15, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

export default Hero;