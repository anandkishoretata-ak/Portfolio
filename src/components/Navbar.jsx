function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Tata Anand Kishore</div>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="/Tata_Anand_Kishore_Resume.pdf" download className="resume-btn">
        Resume
      </a>
    </nav>
  );
}

export default Navbar;