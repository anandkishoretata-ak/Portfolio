function Projects() {
  const projects = [
    {
      title: "Online Banking System",
      description:
        "Banking application with deposit, withdraw, transfer and transaction history.",
    },
    {
      title: "Password Manager",
      description:
        "Secure password management application built with React.",
    },
    {
      title: "Placement Management System",
      description:
        "Student placement tracking and management platform.",
    },
    {
      title: "MedTrack",
      description:
        "AWS-based healthcare management system.",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;