import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>

      <p>
           I am a passionate MERN Stack Developer with experience
        in building responsive and scalable web applications.
        I enjoy solving real-world problems through technology
        and continuously improving my development skills.
      </p>
    </motion.section>
  );
}

export default About;
 
       
       

