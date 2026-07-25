function Projects() {
  const projects = [
    {
      title: "Online Banking System",
      description:
        "Banking application with deposit, withdraw, transfer and transaction history.",
      image: "/Projects/banking.png",
      github:
        "https://github.com/anandkishoretata-ak/Online-Banking-System",
    },
    {
      title: "Quiz Application",
      description:
        "Quiz application with score tracking and multiple categories.",
      image: "/Projects/quiz.png",
      github:
        "https://github.com/anandkishoretata-ak/Quiz-Application",
    },
    {
      title: "MedTrack",
      description:
        "AWS-based healthcare management system.",
      image: "/Projects/medtrack.png",
      github:
        "https://github.com/anandkishoretata-ak/MedTrack",
    },
    {
      title: "Placement Management System",
      description:
        "Student placement tracking and management platform.",
      image: "/Projects/placement.png",
      github:
        "https://github.com/anandkishoretata-ak/Placement-Management-System",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              🚀 View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;