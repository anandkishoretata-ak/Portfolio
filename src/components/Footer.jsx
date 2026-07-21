
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Tata Anand Kishore</h3>

        <p>
          MERN Stack Developer | React Developer | Backend Developer
        </p>

        <div className="footer-icons">
          <a
            href="https://github.com/anandkishoretata-ak"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/anandkishore12"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:anandkishoretata@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <a href="#top" className="scroll-top">
          <FaArrowUp />
        </a>

        <p className="copyright">
          © 2026 Tata Anand Kishore. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;